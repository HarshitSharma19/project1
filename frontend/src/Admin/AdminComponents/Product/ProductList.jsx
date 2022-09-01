import React from "react";
import Button from "../Button.jsx";

export default function ProductList({ name, image, sno, created, price ,details ,discount}) {
  return (
    <>
      <div className="mt-4 mx-10  ">
        <table className="table-auto text-center w-full ">
          <tbody>
            <tr className=" border-b  ">
              <td>{sno}</td>
              <td>{name}</td>
              <td><img src={image} alt="" className='mb-2 w-[115px] h-[75px]'/></td>
              <td>{details}</td>
              <td>{price}</td>
              <td>{discount}</td>
              <td>Brand</td>
              <td>Category</td>
              <td>
                <Button />
              </td>
              <td>
                <Button />
              </td>
              <td>{created}</td>
              <td className="flex py-2">
                <div className="w-20 flex">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-7 h-6 w-6 "
                      fill="none"
                      viewBox="0 0  24  24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-6 h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
