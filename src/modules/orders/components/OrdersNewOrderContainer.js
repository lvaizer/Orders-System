import Modal from "../../../components/modal/Modal";
import {OrdersNewOrderBody} from "./OrdersNewOrderBody";
import {createServerDateFromDate, useBoolean} from "../../../utils";
import {createRef, useState} from "react";
import {getOrderMissingParams, isOrderValid} from "../OrdersUtils";
import {toast, ToastContainer} from "react-toastify";
import {PostNewOrder} from "../../../QueryFactory";

export default function OrdersNewOrderContainer(props) {
    const {refresh} = props;

    const [newOrderError, setNewOrderError] = useState();
    const [isNewOrderModalOpen, showNewOrderModal, hideNewOrderModal] = useBoolean(false);

    const newOrderElementRef = createRef();

    const postNewOrder = PostNewOrder();

    function handleAddNewOrder(newOrder) {
        postNewOrder.mutate(newOrder, {
            onSuccess: () => {
                showOrderAddedToast();
                refresh && refresh();
            }
        });
    }

    function showOrderAddedToast() {
        toast("Order Added Successfully!", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }

    function handleAddNewOrderButtonClick() {
        showNewOrderModal();
    }

    function handleAddNewOrderClicked() {
        const newOrder = {
            first_name: newOrderElementRef.current.elements.first_name.value,
            last_name: newOrderElementRef.current.elements.last_name.value,
            phone: newOrderElementRef.current.elements.phone.value,
            email: newOrderElementRef.current.elements.email.value,
            price: newOrderElementRef.current.elements.price.value,
            notes: newOrderElementRef.current.elements.notes.value,
            date: createServerDateFromDate(newOrderElementRef.current.elements.date.value)
        };

        if (isOrderValid(newOrder)) {
            setNewOrderError(null);
            handleAddNewOrder(newOrder);
            return true;
        } else {
            setNewOrderError('Missing or invalid: ' + getOrderMissingParams(newOrder))
            return false;
        }
    }

    return (
        <div>
            <button className="btn btn-primary" onClick={handleAddNewOrderButtonClick}>+ new order
            </button>
            <Modal
                showModal={isNewOrderModalOpen}
                onCloseClick={hideNewOrderModal}
                saveButton={"Create"}
                onSaveButtonClicked={handleAddNewOrderClicked}
                cancelButton={"Cancel"}
                title={'Add New Order'}
                body={<OrdersNewOrderBody error={newOrderError} ref={newOrderElementRef}/>}
            />
            <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="dark"/>
        </div>
    )
}
