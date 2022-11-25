import ReactDOM from "react-dom";
import { Fragment, PropsWithChildren } from "react";
import { ModalTemplate, ModalBackground, ModalInner } from "./style";

interface ModalProps {
  onClose: () => void;
}

// Modal dimed background 적용.
const ModalBgDimed = (props: ModalProps) => {
  return <ModalBackground onClick={props.onClose} />;
};

// Modal Contents (children 내용을 Modal 규격에 맞게 보여줌.)
const ModalContents = ({ children }: PropsWithChildren) => {
  return (
    <ModalInner>
      <div className="modal-test-inner">{children}</div>
    </ModalInner>
  );
};

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const modalElement = document.getElementById("_modal");
  // null 값에 대한 에러 처리.
  if (modalElement === null) return <div>null이다.</div>;
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <>
          <ModalTemplate>
            <ModalContents>{props.children}</ModalContents>
            <ModalBgDimed onClose={props.onClose}></ModalBgDimed>
          </ModalTemplate>
        </>,
        modalElement
      )}
    </Fragment>
  );
};

export default Modal;
