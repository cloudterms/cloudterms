import { useEffect, useRef } from "react";
import type { Terms } from "./provider";
import "./styles.css";

export const TermsModal = ({
  isOpen,
  terms,
  onAgree,
  ...props
}: {
  isOpen: boolean;
  terms: Terms;
  onAgree: () => void;
} & React.HTMLProps<HTMLDialogElement>) => {
  const ref = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog ref={ref} {...props}>
      <h2 className="text-blue-700">Application agreements</h2>
      <button onClick={onAgree}>agree</button>
    </dialog>
  );
};
