import { motion } from "framer-motion";

interface FormTabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function FormTabs({
  tabs,
  activeTab,
  setActiveTab,
}: FormTabsProps) {
  return (
    <div className="border-b border-[#d9d9d9]">
      <div className="flex items-center gap-4 overflow-x-auto">
        {tabs.map((tab) => {
          const active = activeTab === tab;

          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-8 py-4 text-[15px] whitespace-nowrap"
            >
              {/* ACTIVE BG */}
              {active && (
                <motion.div
                  layoutId="active-tab"
                  className="absolute inset-0 bg-black/80 rounded-t-md"
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}

              <span
                className={`relative z-10 transition-colors duration-300 ${
                  active
                    ? "text-white"
                    : "text-black/50"
                }`}
              >
                {tab}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  )};