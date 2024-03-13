function TabBtn({ title, text, children }) {
  return (
    <a to="#" className={`tab flex gap-x-4 p-4 rounded-lg transition-all `}>
      <div className="w-12 tab-icon transition-all h-12 shrink-0 rounded-full inline-flex items-center justify-center bg-bgray-100 dark:bg-darkblack-500">
        {children}
      </div>
      <div>
        <h4 className="text-base font-bold text-bgray-900 dark:text-white">
          {title}
        </h4>
        <p className="text-sm font-medium text-bgray-700 dark:text-darkblack-300 mt-0.5">
          {text}
        </p>
      </div>
    </a>
  );
}

export default TabBtn;
