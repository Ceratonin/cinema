import style from "./modal.module.css";

const ModalWindow = ({ children, visible, setVisible }: any) => {
  const modalIsVisible = [style.modal]

  if (visible) {
      modalIsVisible.push(style.show)
  }

  return (
    <div className={modalIsVisible.join(" ")} onClick={() => setVisible(false)}>
      <div className={style.modal__content} onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
