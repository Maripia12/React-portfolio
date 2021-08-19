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
                    <label for="first_name">first name</label>
                    <input type="text" name="first_name" placeholder="John" />
                  </p>
                  <p class="pull-right">
                    <label for="last_name">last name</label>
                    <input type="text" name="last_name" placeholder="Smith" />
                  </p>
                </li>

                <li>
                  <p>
                    <label for="email">
                      email <span class="req">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john.smith@gmail.com"
                    />
                  </p>
                </li>
                <li>
                  <div class="divider"></div>
                </li>
                <li>
                  <label for="comments">comments</label>
                  <textarea cols="46" rows="3" name="comments"></textarea>
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
