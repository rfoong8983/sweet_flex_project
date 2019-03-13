import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import FormContainer from '../splash_modal/form_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>

                <FormContainer modal={modal}/>
            </div>
        </div>
    )
}

const msp = state => {
    return {
        modal: state.ui.modal
    }
}

const mdp = dispatch => (
    {
        closeModal: () => dispatch(closeModal())
    }
)

export default connect(msp, mdp)(Modal);