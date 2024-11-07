import '../../css/modal.scss';
export default function Modal({ isOpen, onClose }) {
    if (!isOpen) return null; // Modal tidak tampil jika isOpen = false
    return (
        <div className="modal_wrapper">
            <div className="overlay"></div>
            <div className="modal_box">
                <h3>Fill the Form</h3>
                <div className="form_wrapper">
                    <div className="form_box">
                        <input type="text" placeholder='Name:' />
                    </div>
                    <div className="form_box">
                        <input type="email" placeholder='Email:' />
                    </div>
                    <div className="form_box">
                        <input type="text" placeholder='Company:' />
                    </div>
                    <div className="button_wrapper">
                        <button>Submit</button>
                    </div>
                </div>
                <div className='close_btn' onClick={onClose}></div>
            </div>
        </div>
    );
}