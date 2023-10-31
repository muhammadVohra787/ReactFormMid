import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import "./NewShop.css";

function NewProduct() {
  const myForm = useRef(null);
  var letters = /^[A-Za-z\s]+$/;
  var numbers = /^\d+$/;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="fullForm">
      <form ref={myForm} onSubmit={handleSubmit(onSubmit)}>
        <h2 className="header">New Product</h2>
        <div>
          <label>Name: </label>
          <br></br>
          <input
            id="name"
            type="text"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: letters,
                message: "Name may contain alphabets only",
              },
            })}
          ></input>
          <br></br>
          {errors.name && <p className="error">{errors.name?.message}</p>}
        </div>
        <br></br>
        <br></br>
        <div>
          <label>Description: </label>
          <br></br>
          <input
            id="desc"
            type="text"
            rows={2}
            {...register("Description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be over 10 words",
              },
            })}
          ></input>
          <br></br>
          {errors.Description && (
            <p className="error">{errors.Description?.message}</p>
          )}
        </div>
        <br></br>
        <br></br>

        <div>
          <label>Category: </label>
          <br></br>
          <input
            id="Category"
            type="text"
            {...register("Category", {
              required: "Category is required",
              pattern: {
                value: letters,
                message: "Category may contain alphabets only",
              },
            })}
          ></input>
          <br></br>
          {errors.Category && (
            <p className="error">{errors.Category?.message}</p>
          )}
        </div>
        <br></br>
        <br></br>

        <div>
          <label>Quantity: </label>
          <br></br>
          <input
            type="text"
            {...register("Quantity", {
              required: "Quantity is required",
              pattern: {
                value: numbers,
                message: "Quantity may contain numbers only",
              },
            })}
          ></input>
          <br></br>
          {errors.Quantity && (
            <p className="error">{errors.Quantity?.message}</p>
          )}
        </div>
        <br></br>
        <br></br>

        <div>
          <label>Price: </label>
          <br></br>
          <input
            id="Price"
            type="text"
            {...register("Price", {
              required: "Price is required",
              pattern: {
                value: numbers,
                message: "Price may contain numbers only",
              },
            })}
          ></input>
          <br></br>
          {errors.Price && <p className="error">{errors.Price?.message}</p>}
        </div>
        <br></br>
        <br></br>
        <div className="buttons-grp">
          <button type="submit" id="submit">
            Submit
          </button>
          <button
            type="cancel"
            id="cancel"
            onClick={() => {
              myForm.current.reset();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewProduct;
