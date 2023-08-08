import Form from '../components/Form/Form';
import GoBackLink from '../components/GoBackLink/GoBackLink';
import Title from '../components/ui/Title/Title';

const CreateEvent = () => {
  return (
    <>
      <GoBackLink to="/" />
      <Title>Create new event</Title>
      <Form type="Create" />
    </>
  );
};

export default CreateEvent;
