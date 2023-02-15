import './modal.css';
import {useBoolean} from "../../utils";

export default function Modal(props) {

    const {
        showModal,
        onCloseClick,
        title,
        body,
        saveButton,
        onSaveButtonClicked,
        cancelButton,
        onCancelButtonClicked
    } = props;

    const [isHide, show, hide] = useBoolean('')

    function handleClose() {
        show()
        setTimeout(() => {
            onCloseClick();
            hide()
        }, 200)
    }

    function handleSaveButtonClicked() {
        if(onSaveButtonClicked){
            onSaveButtonClicked()&&handleClose();
        }else{
            handleClose();
        }
    }

    function handleCancelButtonClicked() {
        onCancelButtonClicked && onCancelButtonClicked()
        handleClose();
    }

    if (!showModal) return <></>

    return (
        <div className={`modal_container  ${isHide ? 'animate-unmount' : 'animate-mount'}`}>
            <div className={`modal  ${isHide ? 'animate-unmount' : 'animate-mount'}`}>
                <div className="modal_header">
                    <span className="modal_title">{title}</span>
                    <button className="modal_close-button"
                            onClick={handleClose}>&times;</button>
                </div>
                <div className="modal_body">
                    {body}
                </div>
                <div className="modal_footer">
                    {saveButton &&
                    <button
                        className="btn btn-primary"
                        onClick={handleSaveButtonClicked}>
                        {saveButton}
                    </button>}
                    {cancelButton &&
                    <button
                        className="btn btn-danger"
                        onClick={handleCancelButtonClicked}>
                        {cancelButton}
                    </button>}
                </div>
            </div>
        </div>
    )
}
