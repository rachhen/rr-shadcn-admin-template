import {
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
} from "lucide-react";

export const statuses = [
  {
    value: "pending",
    label: "Pending",
    color: "bg-yellow-500/30",
    icon: HelpCircle,
  },
  {
    value: "rejected",
    label: "Rejected",
    color: "bg-red-500/30",
    icon: Circle,
  },
  {
    value: "shipped",
    label: "Shipped",
    color: "bg-blue-500/30",
    icon: Timer,
  },
  {
    value: "awaiting_payment",
    label: "Awaiting Payment",
    color: "bg-green-500/30",
    icon: CheckCircle,
  },
  {
    value: "canceled",
    label: "Canceled",
    color: "bg-red-500/30",
    icon: CircleOff,
  },
];
