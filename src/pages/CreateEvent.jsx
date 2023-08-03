import Form from '../components/Form/Form';
import GoBackLink from '../components/GoBackLink/GoBackLink';
import Title from '../components/ui/Title/Title';

const CreateEvent = () => {
  return (
    <div>
      <GoBackLink />
      <Title>Create new event</Title>
      <Form />
    </div>
  );
};

export default CreateEvent;
