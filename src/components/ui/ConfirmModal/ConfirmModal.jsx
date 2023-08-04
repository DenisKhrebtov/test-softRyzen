import PropTypes from 'prop-types';

import * as SWMIconPack from 'react-swm-icon-pack';

import {
  BackDrop,
  CloseBtn,
  Modal,
  Content,
  ConfirmButton,
  RejectButton,
} from './ConfirmModal.styled';

import { useNavigate } from 'react-router-dom';

const ConfirmModal = ({ text, onClose, eventId }) => {
  const navigate = useNavigate();

  const onDelete = async () => {
    // await deleteEvent(eventId);

    console.log(eventId);

    navigate('/');
    onClose(false);
  };

  return (
    <BackDrop>
      <Modal>
        <CloseBtn type="button" onClick={() => onClose(false)}>
          <SWMIconPack.Cross set="outline" size={24} color="#7B61FF" />
        </CloseBtn>
        <Content>
          <p>{text}</p>
          <div>
            <ConfirmButton type="button" onClick={onDelete}>
              Yes
            </ConfirmButton>
            <RejectButton type="button" onClick={() => onClose(false)}>
              No
            </RejectButton>
          </div>
        </Content>
      </Modal>
    </BackDrop>
  );
};

export default ConfirmModal;

ConfirmModal.propTypes = {
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  eventId: PropTypes.string.isRequired,
};
