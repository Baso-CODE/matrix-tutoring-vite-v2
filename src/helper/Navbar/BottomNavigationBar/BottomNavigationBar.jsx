import { BookOpen, Home, Info, MoreHorizontal } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BottomNavigationBar.css";

const bottomNavItems = [
  {
    name: "Home",
    link: "/",
    icon: Home,
    type: "link",
  },
  {
    name: "About Us",
    link: "/tentang-kami",
    icon: Info,
    type: "link",
  },
  {
    name: "Program",
    link: null,
    icon: BookOpen,
    type: "modal",
  },
  {
    name: "Lainnya",
    link: null,
    icon: MoreHorizontal,
    type: "more-modal",
  },
];

const clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};

function BottomNavigationBar({ onProgramClick, onMoreClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const navRef = useRef(null);

  const pointerIdRef = useRef(null);
  const startXRef = useRef(0);
  const startIndexRef = useRef(0);
  const currentPositionRef = useRef(0);

  const isDraggingRef = useRef(false);
  const suppressClickRef = useRef(false);
  const suppressTimerRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    let routeIndex = null;

    if (location.pathname === "/") {
      routeIndex = 0;
    } else if (location.pathname === "/tentang-kami") {
      routeIndex = 1;
    }

    if (routeIndex !== null && !isDraggingRef.current) {
      setActiveIndex(routeIndex);
      setIndicatorPosition(routeIndex);
      currentPositionRef.current = routeIndex;
    }
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (suppressTimerRef.current) {
        clearTimeout(suppressTimerRef.current);
      }
    };
  }, []);

  const getItemWidth = () => {
    if (!navRef.current) return 1;

    const rect = navRef.current.getBoundingClientRect();
    const horizontalPadding = 12;

    return (rect.width - horizontalPadding) / bottomNavItems.length;
  };

  const selectTab = (index) => {
    const safeIndex = clamp(index, 0, bottomNavItems.length - 1);

    setActiveIndex(safeIndex);
    setIndicatorPosition(safeIndex);
    currentPositionRef.current = safeIndex;
  };

  const executeClickAction = (index) => {
    const item = bottomNavItems[index];

    if (!item) return;

    selectTab(index);

    if (item.type === "link") {
      navigate(item.link);
      return;
    }

    if (item.type === "modal") {
      onProgramClick?.();
      return;
    }

    if (item.type === "more-modal") {
      onMoreClick?.();
    }
  };

  const executeSwipeAction = (index) => {
    const item = bottomNavItems[index];

    if (!item) return;

    /*
      Swipe hanya memilih tab.

      Home/About Us:
      route langsung berpindah.

      Program/Lainnya:
      hanya jadi active.
      Modal baru dibuka kalau user TAP.
    */
    selectTab(index);

    if (item.type === "link") {
      navigate(item.link);
    }
  };

  const startSuppressClick = () => {
    suppressClickRef.current = true;

    if (suppressTimerRef.current) {
      clearTimeout(suppressTimerRef.current);
    }

    suppressTimerRef.current = setTimeout(() => {
      suppressClickRef.current = false;
    }, 250);
  };

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    pointerIdRef.current = event.pointerId;
    startXRef.current = event.clientX;
    startIndexRef.current = activeIndex;
    currentPositionRef.current = activeIndex;

    isDraggingRef.current = false;

    /*
      PENTING:
      Jangan setPointerCapture di sini.

      Kalau langsung capture saat pointerDown,
      tap/click normal pada button bisa terganggu.
    */
  };

  const handlePointerMove = (event) => {
    if (
      pointerIdRef.current === null ||
      event.pointerId !== pointerIdRef.current
    ) {
      return;
    }

    const deltaX = event.clientX - startXRef.current;
    const dragThreshold = 8;

    /*
      Belum melewati threshold:
      anggap masih tap biasa.
    */
    if (!isDraggingRef.current && Math.abs(deltaX) < dragThreshold) {
      return;
    }

    /*
      Baru setelah benar-benar digeser,
      ubah menjadi mode dragging.
    */
    if (!isDraggingRef.current) {
      isDraggingRef.current = true;
      setIsDragging(true);

      try {
        navRef.current?.setPointerCapture?.(event.pointerId);
      } catch {
        // Browser tertentu mungkin tidak support.
      }
    }

    const itemWidth = getItemWidth();

    const nextPosition = clamp(
      startIndexRef.current + deltaX / itemWidth,
      0,
      bottomNavItems.length - 1,
    );

    currentPositionRef.current = nextPosition;
    setIndicatorPosition(nextPosition);
  };

  const handlePointerUp = (event) => {
    if (
      pointerIdRef.current === null ||
      event.pointerId !== pointerIdRef.current
    ) {
      return;
    }

    const wasDragging = isDraggingRef.current;

    if (wasDragging) {
      try {
        if (navRef.current?.hasPointerCapture?.(event.pointerId)) {
          navRef.current.releasePointerCapture(event.pointerId);
        }
      } catch {
        // Ignore.
      }

      const nearestIndex = clamp(
        Math.round(currentPositionRef.current),
        0,
        bottomNavItems.length - 1,
      );

      isDraggingRef.current = false;
      setIsDragging(false);

      /*
        Setelah drag biasanya browser dapat membuat
        click sintetis.

        Blok click sebentar agar Program/Lainnya
        tidak otomatis membuka modal.
      */
      startSuppressClick();

      executeSwipeAction(nearestIndex);
    }

    /*
      Kalau bukan dragging:
      jangan lakukan apa-apa.

      Biarkan onClick button yang menjalankan tap.
    */
    pointerIdRef.current = null;
  };

  const handlePointerCancel = (event) => {
    try {
      if (navRef.current?.hasPointerCapture?.(event.pointerId)) {
        navRef.current.releasePointerCapture(event.pointerId);
      }
    } catch {
      // Ignore.
    }

    pointerIdRef.current = null;
    isDraggingRef.current = false;

    setIsDragging(false);
    setIndicatorPosition(activeIndex);

    currentPositionRef.current = activeIndex;
  };

  const handleItemClick = (event, index) => {
    /*
      Click setelah swipe jangan dijalankan.
    */
    if (suppressClickRef.current || isDraggingRef.current) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    executeClickAction(index);
  };

  return (
    <nav className="bottom-nav-bar" aria-label="Navigasi utama mobile">
      <div
        ref={navRef}
        className={`bottom-nav-container ${isDragging ? "is-dragging" : ""}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}>
        <span
          className="bottom-nav-active-glass"
          aria-hidden="true"
          style={{
            transform: `translate3d(${indicatorPosition * 100}%, 0, 0)`,
          }}>
          <span className="bottom-nav-active-shine" />
          <span className="bottom-nav-active-caustic" />

          <span className="bottom-nav-water-blob bottom-nav-water-blob-1" />
          <span className="bottom-nav-water-blob bottom-nav-water-blob-2" />

          <span className="bottom-nav-active-ripple bottom-nav-active-ripple-1" />
          <span className="bottom-nav-active-ripple bottom-nav-active-ripple-2" />
        </span>

        {bottomNavItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeIndex === index;

          return (
            <button
              key={item.name}
              type="button"
              className={`bottom-nav-item ${isActive ? "active" : ""}`}
              onClick={(event) => handleItemClick(event, index)}
              aria-label={item.name}
              aria-current={
                item.type === "link" && isActive ? "page" : undefined
              }>
              <span className="bottom-nav-icon-wrapper">
                <Icon className="bottom-nav-icon" />
              </span>

              <span className="bottom-nav-text">{item.name}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNavigationBar;
