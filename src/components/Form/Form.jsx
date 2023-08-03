const Form = () => {
  return (
    <form>
      <label htmlFor="title">Title </label>
      <input id="title" name="title" type="text" />

      <label htmlFor="description"> Description</label>
      <textarea id="description" name="description" type="text" />

      <label htmlFor="date">Select date</label>
      <input id="date" name="date" type="date" />

      <label htmlFor="location">Location</label>
      <input id="location" name="location" type="text" />
    </form>
  );
};

export default Form;
