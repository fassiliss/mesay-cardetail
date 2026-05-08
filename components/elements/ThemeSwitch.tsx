import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [toggleTheme, setToggleTheme] = useState<string>(
    () => localStorage.getItem("toggleTheme") || "light",
  );

  useEffect(() => {
    localStorage.setItem("toggleTheme", toggleTheme);
    document.documentElement.setAttribute("data-bs-theme", toggleTheme);
  }, [toggleTheme]);

  const handleToggleTheme = () => {
    setToggleTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const isDark = toggleTheme === "dark";

  return (
    <button
      className={`theme-toggle ${isDark ? "theme-toggle-dark" : "theme-toggle-light"}`}
      type="button"
      onClick={handleToggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      <span className="theme-toggle-icon">
        <img
          src={
            isDark
              ? "/assets/imgs/template/icons/light-w.svg"
              : "/assets/imgs/template/icons/light.svg"
          }
          alt=""
        />
      </span>
      <span>{isDark ? "Dark" : "Light"}</span>

      <style jsx>{`
        .theme-toggle {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 38px;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 800;
          line-height: 1;
          transition:
            background-color 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .theme-toggle-light {
          border: 2px solid #101010;
          background: #ffffff;
          color: #101010;
          box-shadow: 0 0 0 3px rgba(67, 255, 50, 0.28);
        }

        .theme-toggle-dark {
          border: 2px solid #43ff32;
          background: #101010;
          color: #ffffff;
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.22);
        }

        .theme-toggle-icon {
          display: grid;
          width: 22px;
          height: 22px;
          place-items: center;
          border-radius: 50%;
          background: #43ff32;
        }

        .theme-toggle-dark .theme-toggle-icon {
          background: #ffffff;
        }

        .theme-toggle-icon img {
          width: 15px;
          height: 15px;
          display: block;
        }

        @media (max-width: 575px) {
          .theme-toggle {
            min-height: 34px;
            padding: 6px 10px;
            font-size: 12px;
          }
        }
      `}</style>
    </button>
  );
}
