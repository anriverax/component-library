import { motion } from "framer-motion";
import { TabContentProps } from "./types-tabs";
import { useTab } from "./hook/use-tab";

/**
 * TabContent component that represents a single tab item.
 *
 * @param {TabContentProps} props - The properties for the TabContent component.
 * @returns {React.ReactNode} - The rendered TabContent component.
 */
const TabContent = ({
  classNames,
  slots,
  item,
  selectedKey,
  handleClick,
  isDisable
}: TabContentProps): React.ReactNode => {
  const { getSelecteItem, getTabListBtn, getMotionSpan } = useTab({
    item,
    selectedKey,
    classNames,
    slots,
    isDisable
  });

  return (
    <button {...getTabListBtn()} onClick={() => handleClick(item.id)}>
      {getSelecteItem ? <motion.span {...getMotionSpan()} /> : null}

      <div
        className={slots?.tabContent({
          class: classNames?.tabContent
        })}
        data-slot="tabContent"
      >
        {item?.title}
      </div>
    </button>
  );
};

export default TabContent;
