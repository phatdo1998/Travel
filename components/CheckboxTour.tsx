"use client";

import React from "react";
import { Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const onChange = (e: CheckboxChangeEvent) => {};

const CheckboxTour: React.FC = () => <Checkbox onChange={onChange}></Checkbox>;

export default CheckboxTour;
