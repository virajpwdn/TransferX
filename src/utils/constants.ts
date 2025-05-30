import {
  Smartphone,
  ShieldCheck,
  Search,
  TabletSmartphone,
  MousePointer,
  NotebookText,
  LayoutGrid,
  ChartSpline,
  Wallet,
} from "lucide-react";

export const data = [
  {
    id: 0o1,
    icon: LayoutGrid,
    title: "Secure File Sharing",
    text: "Transfer files with confidence, knowing your data is protected with top-notch security protocols.",
  },
  {
    id: 0o2,
    icon: ChartSpline,
    title: "Cheap Plans",
    text: "Enjoy affordable storage options that fit your needs, with plans designed to give you more for less.",
  },
  {
    id: 0o3,
    icon: Wallet,
    title: "Cost-Effective Storage",
    text: "Get ample storage options without breaking the bank, tailored to suit your needs.",
  },
  {
    id: 0o4,
    icon: Search,
    title: "Advanced Search",
    text: "Quickly find files with powerful search capabilities, including filters.",
  },
];

export const features = [
  {
    id: 1,
    icon: Smartphone,
    title: "Mobile Friendly",
    text: "Access your files seamlessly on any device, ensuring productivity wherever you go.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    title: "Reliable Security",
    text: "Your data is protected with state-of-the-art encryption and secure storage protocols.",
  },
  {
    id: 3,
    icon: Search,
    title: "Advanced Search",
    text: "Quickly find files with powerful search capabilities, including filters and tags.",
  },
  {
    id: 4,
    icon: TabletSmartphone,
    title: "High-Quality Previews",
    text: "Preview files, including images and documents, directly in the platform without downloading.",
  },
  {
    id: 5,
    icon: MousePointer,
    title: "User-Friendly Interface",
    text: "An intuitive design makes managing your files quick and effortless for everyone.",
  },
  {
    id: 6,
    icon: NotebookText,
    title: "Flexible Plans",
    text: "Choose a plan that fits your needs, from free options to premium solutions.",
  },
];

export const uploadServices = [
  {
    title: "File Upload & Sharing",
    content:
      "Easily upload & share files with anyone using secure links, ensuring fast and hassle-free transfers.",
    id: 1,
    isPro: false,
  },
  {
    title: "Personal Dashboard",
    content:
      "Easily manage your account, files, and folders in one unified dashboard.",
    id: 2,
    isPro: false,
  },
  {
    title: "Advanced Search",
    content:
      "Quickly find files with powerful search capabilities, including filters.",
    id: 3,
    isPro: false,
  },
  {
    title: "Extend Storage as per Plan",
    content:
      "Scale your storage space based on your requirements with flexible and affordable plans.",
    id: 4,
    isPro: true,
  },
];

export const pricing = [
  {
    id: 10,
    type: "Free",
    duration: null,
    rs: "0",
    features: [
      "50GB of storage",
      "10MB file upload size",
      "24*7 support",
      "Secure data encryption",
    ],
  },
  {
    id: 11,
    type: "Basic",
    duration: 3,
    rs: "29",
    ogRs: "99",
    features: [
      "100GB of storage",
      "3GB file upload size",
      "24*7 support",
      "Secure data encryption",
    ],
  },
  {
    id: 12,
    type: "Premium",
    duration: 3,
    rs: "399",
    ogRs: "999",
    features: [
      "500GB of storage",
      "6GB file upload size",
      "24*7 support",
      "Secure data encryption",
    ],
  },
];

export const accordian = [
  {
    id: 110,
    question: "If my plan expires, can I still access already uploaded data?",
    answer:
      "Yes, you can still access your previously uploaded data. However, you won't be able to upload new data with premium capacity until you renew your plan.",
  },
  {
    id: 111,
    question: "Can I upgrade my plan anytime?",
    answer:
      "Yes, you can upgrade your plan anytime. The new plan will be activated immediately, and any remaining credits from your current plan will be adjusted accordingly. However, downgrades are not supported as we follow the RATA(Raise And Then Adjust) approach.",
  },
  {
    id: 112,
    question: "Does TransferX have a free plan?",
    answer:
      "Yes, TransferX offers a free plan with 100 GB of storage and essential features. You can upgrade anytime for additional storage and advanced features.",
  },
  {
    id: 113,
    question: "Can I share files with users who don't have a TransferX account?",
    answer:
      "Yes, you can generate shareable links to send files to non-TransferX users. They can access the files without needing to create an account.",
  },
  {
    id: 114,
    question: "What file formats are supported?",
    answer:
      "TransferX supports all major file formats, including documents, images, videos, and zip files.",
  },
  {
    id: 115,
    question: "How does TransferX ensure my data is safe?",
    answer:
      "TransferX ensures your data's safety by securely hosting it on AWS, a trusted cloud provider with industry-standard security measures.",
  },
  {
    id: 116,
    question: "Can I recover deleted files?",
    answer:
      "Deleted files can be recovered within 30 days from the 'Trash' section. After 30 days, the data will be permanently deleted and cannot be recovered.",
  },
  {
    id: 117,
    question: "Is there a limit on the file size for uploads?",
    answer:
      "Yes, the maximum file size depends on your plan. Free plans allow up to 10 MB per file, while Basic and Premium plans support uploads up to 2 GB per file.",
  },
  {
    id: 118,
    question: "Can I cancel my plan at any time?",
    answer:
      "Plans are non-cancelable once purchased. After the plan's validity expires, it will automatically switch to the free tier.",
  },
];


export const platforms = ["Web"];

export const about = ["About us"];

export const policies = ["Terms & Services", "Privacy & Policy", "Refund & Cancellation"]

export const navCards = [{
  title: "Priority Support",
  text: "Get dedicated assistance to ensure a smooth and hassle-free experience.",
  id: 123
},
{
  title: "Upload a Single File up to 2 GB",
  text: "Making sharing and storing heavy media or documents a breeze.",
  id: 121
},
{
  title: "Faster Upload",
  text: "Experience lightning-fast upload speeds, ensuring file storage securely in no time.",
  id: 124
},
{
  title: "More Storage",
  text: "Enjoy generous storage options to keep your important files at in one place.",
  id: 125
}
]