import React from "react";
import "./Header.css"


function Header() {
  return (
      <h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-list-check"
          width="44"
          height="54"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#b3baf5"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3.5 5.5l1.5 1.5l2.5 -2.5" />
          <path d="M3.5 11.5l1.5 1.5l2.5 -2.5" />
          <path d="M3.5 17.5l1.5 1.5l2.5 -2.5" />
          <path d="M11 6l9 0" />
          <path d="M11 12l9 0" />
          <path d="M11 18l9 0" />
        </svg>
        TODO LIST
      </h1>
  )
}
export default Header