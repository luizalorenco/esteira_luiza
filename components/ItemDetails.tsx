import React, { useEffect, useState } from "react";
import api from "../api/api";

type ItemDetails = {
  id: number;
  name: string;
  description: string;
};

export default ItemDetails;