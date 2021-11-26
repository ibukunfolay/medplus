import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import Menu from "./Menu";
import Right from "./Right";

const Tab = () => {
  return (
    <div className="cards">
      <div className="card1">
        <div className="first-element">
          <div className="top">
            <div className="card-name">Maciej Zakoscielny, 39, M</div>
            <div className="radios">
              <span>Status</span>
              <div>
                <input type="radio" name="radio" id="radio1" />
                <label for="radio1">Open</label>
              </div>
              <div>
                <input type="radio" name="radio" id="radio2" />
                <label for="radio2">Reviewed</label>
              </div>
            </div>
          </div>
        </div>
        <div className="second-element">
          <div className="box-con">
            <div className="box">
              <label for="provider">Provider</label>
              <GoPrimitiveDot className="dot" />
              <AiOutlineSearch />

              <input
                id="provider"
                name="provider"
                required
                list="provider-list"
                pattern="Elijah Manning|More"
                title="Please select a provider"
              />
              <datalist id="provider-list">
                <option value="Elijah Manning" />
                <option value="More" />
                ...
              </datalist>
            </div>
            <div className="box">
              <label for="assignee">Assigned to</label>
              <span>
                <GoPrimitiveDot className="dot" />
              </span>
              <AiOutlineSearch />

              <input
                id="assignee"
                name="assignee"
                required
                list="assignee-list"
                pattern="New Scot Clinic|More"
                title="Please select an assignee"
              />
              <datalist id="assignee-list">
                <option value="New Scot Clinic" />
                <option value="More" />
                ...
              </datalist>
            </div>
            <div className="box">
              <label for="facility">Facility</label>
              <span>
                <GoPrimitiveDot className="dot" />
              </span>
              <AiOutlineSearch />

              <input
                id="facility"
                name="facility"
                required
                list="facility-list"
                pattern="New Scot Clinic|More"
                title="Please select a facility"
              />
              <datalist id="facility-list">
                <option value="New Scot Clinic" />
                <option value="More" />
                ...
              </datalist>
            </div>
            <div className="box">
              <label for="laboratory">Laboratory</label>
              <span>
                <GoPrimitiveDot className="dot" />
              </span>
              <AiOutlineSearch />

              <input
                id="laboratory"
                name="laboratory"
                required
                list="laboratory-list"
                pattern="Lipid panel|France"
                title="Please select a laboratory"
              />
              <datalist id="laboratory-list">
                <option value="Lipid Panel" />
                <option value="More" />
                ...
              </datalist>
            </div>
          </div>
          <div>
            <div class="pretty p-default p-thick base1">
              <input type="checkbox" />
              <div class="state">
                <label>High Priority</label>
              </div>
            </div>
            <div class="pretty p-default p-thick base1">
              <input type="checkbox" />
              <div class="state  p-primary">
                <label>Cancelled</label>
              </div>
            </div>
            <div class="pretty  p-default p-fill base1">
              <input type="checkbox" disabled />
              <div class="state p-info">
                <label>Previous Order</label>
              </div>
            </div>
            <div class="pretty p-default p-fill base1">
              <input type="checkbox" disabled />
              <div class="state ">
                <label>In-house</label>
              </div>
            </div>
          </div>
        </div>
        <div className="mennu">
          <Menu />
        </div>
      </div>
      <div className="card2">
        <Right />
      </div>
    </div>
  );
};

export default Tab;
