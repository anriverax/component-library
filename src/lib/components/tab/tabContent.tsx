import { motion } from "framer-motion";
import { TabContentProps } from "./types-tabs";
import { useTab } from "./hook/use-tab";

const TabContent = ({
  classNames,
  slots,
  item,
  selectedKey,
  handleClick,
  isDisable
}: TabContentProps) => {
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
