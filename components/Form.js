import { useState } from "react";
import styles from "../styles/Form.module.css";
const Form = (props) => {
  let data;
  const [name, setName] = useState("");
  const [founder, setFounder] = useState("");
  const [description, setDescription] = useState("");
  const [vision, setVision] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    data = {
      name: name,
      founder: founder,
      description: description,
      vision: vision,
    };
    props.startupForm(data);

    console.log(data);
    setName("");
    setFounder("");
    setDescription("");
    setVision("");
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles.inputDiv}>
        <label htmlFor="name" className={styles.label}>
          Startup name
        </label>
        <input
          className={styles.input}
          placeholder="name"
          required
          name="name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        ></input>
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="name" className={styles.label}>
          Startup founder
        </label>
        <input
          className={styles.input}
          placeholder="founder"
          required
          name="founders"
          type="text"
          onChange={(e) => {
            setFounder(e.target.value);
          }}
          value={founder}
        ></input>
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="name" className={styles.label}>
          Startup description
        </label>
        <input
          className={styles.input}
          placeholder="description"
          required
          name="description"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></input>
      </div>
      <div className={styles.inputDiv}>
        <label htmlFor="name" className={styles.label}>
          Startup vision
        </label>
        <input
          className={styles.input}
          placeholder="vision"
          required
          name="vision"
          type="text"
          onChange={(e) => {
            setVision(e.target.value);
          }}
          value={vision}
        ></input>
      </div>
      <button type="submit" className={styles.submitButton}>
        submit
      </button>
    </form>
  );
};

export default Form;
