// import { Container } from "../shared/Container";
import logo from "/assets/logos/SAAT_Logo.png";
// import { useThemeStore } from "../../store/ThemeStore";

const navItems = [
  { href: "#", text: "Home" },
  { href: "#Domain", text: "Domain" },
  { href: "#Milestone", text: "Milestones" },
  { href: "#Documents", text: "Documents" },
  { href: "#Presentation", text: "Presentations" },
  { href: "#Team", text: "About Us" },
  { href: "#about-us", text: "Contact Us" }
];

export const NavBar = () => {
  //   const { toggleTheme, theme } = useThemeStore();

  return (
    <header className=" inset-x-0 top-0 z-50 py-6 ">
      <div
        className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 `}
      >
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <img src={logo} alt="EdgeAI Logo" className="w-10 h-10 rounded-full" />
              <div className="self-center text-xl font-semibold whitespace-nowrap inline-flex text-lg font-semibold text-heading-1">
                S A A T
              </div>
            </a>
          </div>

          <div
            className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                      absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent 
                      border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden"
          >
            <ul
              className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 
                           pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4
                           text-lg text-heading-2 w-full lg:justify-center lg:items-center gap-x-[2.3rem]"
            >
              {navItems.map((item, key) => (
                <div>
                  <li key={key}>
                    <a
                      href={item.href}
                      className="duration-300 font-medium ease-linear hover:text-primary py-3"
                    >
                      {item.text}
                    </a>
                  </li>
                </div>
              ))}
            </ul>
            <div
              className="lg:min-w-max flex items-center sm:w-max w-full pb-6 
                            lg:pb-0 border-b border-box-border lg:border-0
                            px-6 lg:px-0"
            >
              <a
                href="#cta" className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-blue-600 cursor-pointer`}
              >
                <span className="relative z-10 text-white"> Get Started</span>
              </a>
            </div>
          </div>

          <div className="min-w-max flex items-center gap-x-3">

          </div>
        </nav>
      </div>
    </header>
  );
};
