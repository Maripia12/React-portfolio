import React from "react";
import './contact.css'

export default function Contact() {
  
  return (
    <div>
      <h1 className="contactTitle">Contact Me</h1>
        <div class="container">
          <div class="row body">
            <form action="#">
              <ul>
                <li>
                  <p class="left">
                    <label for="first_name">First Name </label>
                    <input type="text" name="first_name" />
                  </p>
                  <p class="pull-right">
                    <label for="last_name">Last Name </label>
                    <input type="text" name="last_name" />
                  </p>
                </li>

                <li>
                  <p>
                    <label for="email">
                      Email <span class="req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                     
                    />
                  </p>
                </li>
                <li>
                  <div class="divider"></div>
                </li>
                <li>
                  <p>
                  <label for="comments">Message </label>
                  <textarea cols="100" rows="15" name="comments"></textarea>
                  </p>
                </li>

                <li>
                  <input class="btn btn-submit" type="submit" value="Submit" />
                </li>
              </ul>
            </form>
          </div>
        </div>
    </div>
  );
}
