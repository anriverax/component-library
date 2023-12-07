import React, { useEffect, useRef, useState } from "react";
import CodeMirror, { ReactCodeMirrorRef } from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubDarkInit } from "@uiw/codemirror-theme-github";
import ClipboardJS from "clipboard";
import Wrapper from "./layout/wrapper";
import { Button } from "@/lib/form";
import { tv } from "@/lib/utils/tv";
import { CopyIcon, CheckIcon } from "@/lib/components/icons";

interface CodeViewerProps {
  /**
   * The code to be displayed in the CodeViewer.
   */
  code: string;
}

/**
 * CodeViewer component for displaying and copying code snippets.
 *
 * @param {CodeViewerProps} props - The props for the CodeViewer component.
 * @returns {JSX.Element} The CodeViewer component.
 */
const CodeViewer: React.FC<CodeViewerProps> = ({ code }: CodeViewerProps): JSX.Element => {
  const [isExpanded, setExpanded] = useState<boolean>(false);
  const [isCopied, setCopied] = useState<boolean>(false);
  const codeMirrorRef = useRef<ReactCodeMirrorRef>(null);

  /**
   * TV utility function for managing button styles.
   */
  const button = tv({
    base: "w-full absolute z-10 py-1 px-4 flex items-center justify-center",
    variants: {
      expanded: {
        false: "h-full inset-0 bg-gradient-to-b from-transparent to-default-500",
        true: "h-10 bottom-0 pb-6 mb-6"
      }
    },
    defaultVariants: {
      expanded: false
    }
  });

  /**
   * Handles the click event for the copy button.
   */
  const handleCopyClick = (): void => {
    if (codeMirrorRef.current && !isCopied) {
      const codeMirrorInstance = codeMirrorRef.current.editor as Node;
      const selection = window.getSelection();

      const range = document.createRange();
      range.selectNodeContents(codeMirrorInstance);

      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand("copy");
        selection.removeAllRanges();

        // Display success message
        setCopied(true);
      }
    }
  };

  useEffect(() => {
    new ClipboardJS(".copy-button");
  }, []);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    }
  }, [isCopied]);

  return (
    <Wrapper>
      <div className="relative">
        <div className={button({ expanded: isExpanded })}>
          <Button
            className="bg-[#2a2838] shadow-md font-sans text-white"
            radius="full"
            size="sm"
            variant="flat"
            value={isExpanded ? "Show less" : "Show more"}
            onClick={() => setExpanded(!isExpanded)}
          />
        </div>
        <CodeMirror
          value={code}
          height={isExpanded ? "600px" : "234px"}
          theme={githubDarkInit({
            settings: {
              caret: "#f25551",
              foreground: "#e4e4e6",
              background: "#37354b",
              fontFamily: "monospace",
              gutterBackground: "#37354b",
              gutterForeground: "#e4e4e6"
            }
          })}
          basicSetup={{
            lineNumbers: false,
            foldGutter: false
          }}
          extensions={[javascript({ jsx: true, typescript: true })]}
          ref={codeMirrorRef}
        />
        <div className="z-0 absolute top-2 right-4">
          {!isCopied ? (
            <Button
              className="copy-button"
              isIconOnly
              size="sm"
              variant="light"
              onClick={handleCopyClick}
              value="ss"
            >
              <CopyIcon className="text-white" height={16} width={16} />
            </Button>
          ) : (
            <Button className="copy-button" isIconOnly size="sm" variant="light" value="icon">
              <CheckIcon className="text-white" height={8} width={8} />
            </Button>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default CodeViewer;
