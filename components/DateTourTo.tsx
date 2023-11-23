"use client";

import React from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const weekFormat = "MM/DD";
const monthFormat = "YYYY/MM";

/** Manually entering any of the following formats will perform date parsing */
const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

const customFormat: DatePickerProps["format"] = (value) =>
  `custom format: ${value.format(dateFormat)}`;

const customWeekStartEndFormat: DatePickerProps["format"] = (value) =>
  `${dayjs(value).startOf("week").format(weekFormat)} ~ ${dayjs(value)
    .endOf("week")
    .format(weekFormat)}`;

const DateTourTo: React.FC = () => (
  <Space className="w-full mt-4" direction="vertical" size={12}>
    <DatePicker
      placeholder="Date To"
      format={dateFormat}
      className="h-[52px] w-[100%]"
    />
  </Space>
);

export default DateTourTo;
