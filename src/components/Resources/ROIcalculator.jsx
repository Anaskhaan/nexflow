// import { useState } from "react";

// export default function SaasCalculator() {
//   const [model, setModel] = useState("PLG");
//   const [formData, setFormData] = useState({
//     price: "",
//     margin: "80",
//     churn: "",
//     mktSpend: "",
//     adSpend: "",
//     newCust: "",
//     activationCost: "0",
//     convRate: "10",
//     numReps: "3",
//     salary: "4000",
//     commission: "5",
//   });
//   const [results, setResults] = useState(null);

//   const handleModelChange = (e) => {
//     setModel(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const calculateMetrics = (e) => {
//     e.preventDefault();

//     const price = parseFloat(formData.price);
//     const margin = (parseFloat(formData.margin) || 80) / 100;
//     const churn = parseFloat(formData.churn) / 100;
//     const mkt = parseFloat(formData.mktSpend);
//     const ads = parseFloat(formData.adSpend);
//     const newC = parseFloat(formData.newCust);

//     if (!newC || !churn) {
//       alert("Please enter both churn rate and number of new customers");
//       return;
//     }

//     let extra = 0,
//       note = "";
//     if (model === "PLG") {
//       const act = parseFloat(formData.activationCost);
//       extra = act * newC;
//       note = `Activation Cost = $${act.toFixed(2)} × ${newC}`;
//     } else {
//       const reps = parseFloat(formData.numReps);
//       const sal = parseFloat(formData.salary);
//       const com = parseFloat(formData.commission) / 100;
//       extra = reps * sal + com * price * newC;
//       note = `Sales Cost = (${reps} × $${sal}) + ${(com * 100).toFixed(
//         1
//       )}% commission`;
//     }

//     const cac = (mkt + ads + extra) / newC;
//     const ltv = (price * margin) / churn;
//     const ratio = ltv / cac;
//     const payback = cac / price;
//     const roi = ((ltv - cac) / cac) * 100;

//     setResults({
//       cac: `$${cac.toFixed(2)}`,
//       ltv: `$${ltv.toFixed(2)}`,
//       ratio: `${ratio.toFixed(2)}:1`,
//       roi: `${roi.toFixed(1)}%`,
//       payback: `${payback.toFixed(1)} mo`,
//       note,
//       margin: Math.round(margin * 100),
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-6 sm:p-8">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-[#3FA69B]">
//             SaaS ROI Calculator
//           </h1>
//           <p className="mt-2 text-gray-400">
//             Calculate your Customer Acquisition Cost and Lifetime Value
//           </p>
//         </div>

//         <form onSubmit={calculateMetrics} className="space-y-6">
//           {/* Model Selection */}
//           <div className="space-y-2">
//             <label className="block text-sm font-medium text-gray-300">
//               Product Model
//             </label>
//             <div className="flex rounded-md shadow-sm bg-gray-700 overflow-hidden">
//               <button
//                 type="button"
//                 onClick={() => setModel("PLG")}
//                 className={`flex-1 py-3 px-4 text-sm font-medium ${
//                   model === "PLG"
//                     ? "bg-[#3FA69B] text-white"
//                     : "text-gray-300 hover:bg-gray-600"
//                 }`}
//               >
//                 PLG / Self-Serve
//               </button>
//               <button
//                 type="button"
//                 onClick={() => setModel("SUB")}
//                 className={`flex-1 py-3 px-4 text-sm font-medium ${
//                   model === "SUB"
//                     ? "bg-[#3FA69B] text-white"
//                     : "text-gray-300 hover:bg-gray-600"
//                 }`}
//               >
//                 Sales-Led Subscription
//               </button>
//             </div>
//           </div>

//           {/* Core Metrics */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-300">
//                 Monthly Price ($)
//               </label>
//               <input
//                 name="price"
//                 type="number"
//                 step="0.01"
//                 value={formData.price}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                 placeholder="0.00"
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-300">
//                 Gross Margin (%)
//               </label>
//               <input
//                 name="margin"
//                 type="number"
//                 step="0.1"
//                 value={formData.margin}
//                 onChange={handleInputChange}
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                 placeholder="80"
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-300">
//                 Monthly Churn (%)
//               </label>
//               <input
//                 name="churn"
//                 type="number"
//                 step="0.01"
//                 value={formData.churn}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                 placeholder="0.00"
//               />
//             </div>
//           </div>

//           {/* Acquisition Metrics */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-300">
//                 Marketing Spend ($)
//               </label>
//               <input
//                 name="mktSpend"
//                 type="number"
//                 step="0.01"
//                 value={formData.mktSpend}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                 placeholder="0.00"
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-300">
//                 Ad Spend ($)
//               </label>
//               <input
//                 name="adSpend"
//                 type="number"
//                 step="0.01"
//                 value={formData.adSpend}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                 placeholder="0.00"
//               />
//             </div>
//             <div className="space-y-1">
//               <label className="block text-sm font-medium text-gray-300">
//                 New Customers
//               </label>
//               <input
//                 name="newCust"
//                 type="number"
//                 value={formData.newCust}
//                 onChange={handleInputChange}
//                 required
//                 className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                 placeholder="0"
//               />
//             </div>
//           </div>

//           {/* Model-Specific Fields */}
//           {model === "PLG" ? (
//             <div className="p-4 bg-gray-700 rounded-lg border border-[#3f4e58]">
//               <h3 className="text-lg font-medium text-[#3FA69B] mb-3">
//                 PLG-Specific Metrics
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="space-y-1">
//                   <label className="block text-sm font-medium text-gray-300">
//                     Activation Cost ($)
//                   </label>
//                   <input
//                     name="activationCost"
//                     type="number"
//                     step="0.01"
//                     value={formData.activationCost}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="block text-sm font-medium text-gray-300">
//                     Free-to-Paid (%)
//                   </label>
//                   <input
//                     name="convRate"
//                     type="number"
//                     step="0.1"
//                     value={formData.convRate}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                   />
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="p-4 bg-gray-700 rounded-lg border border-[#3f4e58]">
//               <h3 className="text-lg font-medium text-[#3FA69B] mb-3">
//                 Sales-Led Metrics
//               </h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <div className="space-y-1">
//                   <label className="block text-sm font-medium text-gray-300">
//                     # Sales Reps
//                   </label>
//                   <input
//                     name="numReps"
//                     type="number"
//                     value={formData.numReps}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="block text-sm font-medium text-gray-300">
//                     Salary/Rep ($)
//                   </label>
//                   <input
//                     name="salary"
//                     type="number"
//                     step="0.01"
//                     value={formData.salary}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                   />
//                 </div>
//                 <div className="space-y-1">
//                   <label className="block text-sm font-medium text-gray-300">
//                     Commission (%)
//                   </label>
//                   <input
//                     name="commission"
//                     type="number"
//                     step="0.1"
//                     value={formData.commission}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
//                   />
//                 </div>
//               </div>
//             </div>
//           )}

//           <button
//             type="submit"
//             className="w-full py-3 px-6 bg-[#3FA69B] hover:bg-[#359186] text-white font-medium rounded-lg transition-colors duration-200 shadow-md"
//           >
//             Calculate Metrics
//           </button>
//         </form>

//         {/* Results Section */}
//         {results && (
//           <div className="mt-8 bg-gray-700 rounded-xl p-6 border border-[#3f4e58]">
//             <h2 className="text-2xl font-bold text-[#3FA69B] mb-4">Results</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//               <div className="bg-gray-800 p-4 rounded-lg">
//                 <h3 className="text-lg font-medium text-gray-300 mb-3">
//                   Customer Metrics
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">CAC:</span>
//                     <span className="font-medium">{results.cac}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">LTV:</span>
//                     <span className="font-medium">{results.ltv}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">LTV:CAC Ratio:</span>
//                     <span className="font-medium">{results.ratio}</span>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gray-800 p-4 rounded-lg">
//                 <h3 className="text-lg font-medium text-gray-300 mb-3">
//                   Financial Metrics
//                 </h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">ROI:</span>
//                     <span className="font-medium">{results.roi}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Payback Period:</span>
//                     <span className="font-medium">{results.payback}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-gray-400">Gross Margin:</span>
//                     <span className="font-medium">{results.margin}%</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="bg-gray-800 p-4 rounded-lg">
//               <h3 className="text-lg font-medium text-gray-300 mb-2">
//                 Calculations
//               </h3>
//               <ul className="space-y-2 text-sm text-gray-400">
//                 <li>• CAC = (Marketing + Ads + Model-Cost) ÷ New Customers</li>
//                 <li>• {results.note}</li>
//                 <li>• LTV = Price × Gross Margin ÷ Churn</li>
//                 <li>• ROI = ((LTV – CAC) ÷ CAC) × 100</li>
//               </ul>
//             </div>
//           </div>
//         )}

//         {/* Definitions */}
//         <details className="mt-8 group">
//           <summary className="flex items-center cursor-pointer text-[#3FA69B] font-medium text-lg">
//             <span>Field Definitions</span>
//             <svg
//               className="ml-2 w-5 h-5 group-open:rotate-180 transition-transform"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </summary>
//           <div className="mt-4 p-4 bg-gray-700 rounded-lg">
//             <ul className="space-y-2 text-gray-300">
//               <li>
//                 <span className="font-medium text-[#3FA69B]">ARPU/ARPA</span> –
//                 Average monthly revenue per user/account.
//               </li>
//               <li>
//                 <span className="font-medium text-[#3FA69B]">Gross Margin</span>{" "}
//                 – (Revenue – COGS) ÷ Revenue × 100.
//               </li>
//               <li>
//                 <span className="font-medium text-[#3FA69B]">
//                   Monthly Churn
//                 </span>{" "}
//                 – Percentage of customers cancelling each month.
//               </li>
//               <li>
//                 <span className="font-medium text-[#3FA69B]">CAC</span> –
//                 Customer Acquisition Cost.
//               </li>
//               <li>
//                 <span className="font-medium text-[#3FA69B]">LTV</span> –
//                 Lifetime Value of a customer.
//               </li>
//             </ul>
//           </div>
//         </details>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";

export default function SaasCalculator() {
  const [model, setModel] = useState("PLG");
  const [formData, setFormData] = useState({
    price: "",
    margin: "80",
    churn: "",
    mktSpend: "",
    adSpend: "",
    newCust: "",
    activationCost: "0",
    convRate: "10",
    numReps: "3",
    salary: "4000",
    commission: "5",
  });
  const [results, setResults] = useState(null);

  const handleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateMetrics = (e) => {
    e.preventDefault();

    const price = parseFloat(formData.price);
    const margin = (parseFloat(formData.margin) || 80) / 100;
    const churn = parseFloat(formData.churn) / 100;
    const mkt = parseFloat(formData.mktSpend);
    const ads = parseFloat(formData.adSpend);
    const newC = parseFloat(formData.newCust);

    if (!newC || !churn) {
      alert("Please enter both churn rate and number of new customers");
      return;
    }

    let extra = 0,
      note = "";
    if (model === "PLG") {
      const act = parseFloat(formData.activationCost);
      extra = act * newC;
      note = `Activation Cost = $${act.toFixed(2)} × ${newC}`;
    } else {
      const reps = parseFloat(formData.numReps);
      const sal = parseFloat(formData.salary);
      const com = parseFloat(formData.commission) / 100;
      extra = reps * sal + com * price * newC;
      note = `Sales Cost = (${reps} × $${sal}) + ${(com * 100).toFixed(
        1
      )}% commission`;
    }

    const cac = (mkt + ads + extra) / newC;
    const ltv = (price * margin) / churn;
    const ratio = ltv / cac;
    const payback = cac / price;
    const roi = ((ltv - cac) / cac) * 100;

    setResults({
      cac: `$${cac.toFixed(2)}`,
      ltv: `$${ltv.toFixed(2)}`,
      ratio: `${ratio.toFixed(2)}:1`,
      roi: `${roi.toFixed(1)}%`,
      payback: `${payback.toFixed(1)} mo`,
      note,
      margin: Math.round(margin * 100),
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Glowing Header */}
        <div className="relative mb-10">
          <div className="absolute -inset-3 bg-gradient-to-r from-[#3FA69B] to-[#2a7a72] rounded-xl blur opacity-75"></div>
          <div className="relative bg-gradient-to-r from-[#2a7a72] to-[#3FA69B] rounded-xl p-6 shadow-lg">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-2">
                SaaS ROI Calculator
              </h1>
              <p className="text-lg text-gray-100 opacity-90">
                Advanced metrics to optimize your customer acquisition strategy
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Calculator Card */}
        <div className="bg-gray-800/70 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-gray-700/50">
          {/* Model Selector */}
          <div className="px-8 pt-8">
            <div className="inline-flex rounded-full shadow-lg bg-gray-900 overflow-hidden border border-gray-700">
              <button
                type="button"
                onClick={() => setModel("PLG")}
                className={`py-3 px-6 text-sm font-medium transition-all duration-300 flex items-center ${
                  model === "PLG"
                    ? "bg-gradient-to-r from-[#3FA69B] to-[#2a7a72] text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                <svg
                  className={`w-5 h-5 mr-2 ${
                    model === "PLG" ? "text-white" : "text-gray-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Product-Led
              </button>
              <button
                type="button"
                onClick={() => setModel("SUB")}
                className={`py-3 px-6 text-sm font-medium transition-all duration-300 flex items-center ${
                  model === "SUB"
                    ? "bg-gradient-to-r from-[#3FA69B] to-[#2a7a72] text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                <svg
                  className={`w-5 h-5 mr-2 ${
                    model === "SUB" ? "text-white" : "text-gray-400"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Sales-Led
              </button>
            </div>
          </div>

          <form onSubmit={calculateMetrics} className="p-8">
            {/* Core Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#3FA69B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Monthly Price
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    $
                  </span>
                  <input
                    name="price"
                    type="number"
                    step="0.01"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500 transition-all duration-200"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#3FA69B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z"
                    />
                  </svg>
                  Gross Margin
                </label>
                <div className="relative">
                  <input
                    name="margin"
                    type="number"
                    step="0.1"
                    value={formData.margin}
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500 transition-all duration-200"
                    placeholder="80"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    %
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#3FA69B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4m12 6l6-6m-6-6l6 6"
                    />
                  </svg>
                  Monthly Churn
                </label>
                <div className="relative">
                  <input
                    name="churn"
                    type="number"
                    step="0.01"
                    value={formData.churn}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500 transition-all duration-200"
                    placeholder="0.00"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    %
                  </span>
                </div>
              </div>
            </div>

            {/* Acquisition Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#3FA69B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  Marketing Spend
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    $
                  </span>
                  <input
                    name="mktSpend"
                    type="number"
                    step="0.01"
                    value={formData.mktSpend}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500 transition-all duration-200"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#3FA69B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Ad Spend
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    $
                  </span>
                  <input
                    name="adSpend"
                    type="number"
                    step="0.01"
                    value={formData.adSpend}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500 transition-all duration-200"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[#3FA69B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  New Customers
                </label>
                <input
                  name="newCust"
                  type="number"
                  value={formData.newCust}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500 transition-all duration-200"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Model-Specific Fields */}
            {model === "PLG" ? (
              <div className="p-6 bg-gray-700/30 rounded-xl border border-gray-600/30 mb-8 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-[#3FA69B] mb-5 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Product-Led Growth Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Activation Cost
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        $
                      </span>
                      <input
                        name="activationCost"
                        type="number"
                        step="0.01"
                        value={formData.activationCost}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Free-to-Paid Rate
                    </label>
                    <div className="relative">
                      <input
                        name="convRate"
                        type="number"
                        step="0.1"
                        value={formData.convRate}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] transition-all duration-200"
                      />
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-gray-700/30 rounded-xl border border-gray-600/30 mb-8 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-[#3FA69B] mb-5 flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Sales-Led Subscription Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Sales Reps
                    </label>
                    <input
                      name="numReps"
                      type="number"
                      value={formData.numReps}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Salary per Rep
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        $
                      </span>
                      <input
                        name="salary"
                        type="number"
                        step="0.01"
                        value={formData.salary}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider">
                      Commission
                    </label>
                    <div className="relative">
                      <input
                        name="commission"
                        type="number"
                        step="0.1"
                        value={formData.commission}
                        onChange={handleInputChange}
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] transition-all duration-200"
                      />
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-[#3FA69B] to-[#2a7a72] hover:from-[#359186] hover:to-[#1f645c] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              <span className="relative">
                <span className="absolute -inset-0.5 bg-[#3FA69B] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></span>
                <span className="relative z-10 flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 animate-pulse"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  <span className="text-lg">Calculate Business Metrics</span>
                </span>
              </span>
            </button>
          </form>

          {/* Results Section */}
          {results && (
            <div className="px-8 pb-8">
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-[#3FA69B] to-[#2a7a72] rounded-2xl blur opacity-25"></div>
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700/50">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <svg
                      className="w-8 h-8 mr-3 text-[#3FA69B]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                    Performance Insights
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Customer Metrics */}
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                      <div className="flex items-center mb-5">
                        <div className="p-2 rounded-lg bg-[#3FA69B]/10 mr-4">
                          <svg
                            className="w-6 h-6 text-[#3FA69B]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          Customer Metrics
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                          <div>
                            <p className="text-gray-400">
                              Customer Acquisition Cost
                            </p>
                            <p className="text-sm text-gray-500">
                              Total spend per new customer
                            </p>
                          </div>
                          <span className="font-bold text-2xl text-white bg-[#3FA69B]/10 px-3 py-1 rounded-lg">
                            {results.cac}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                          <div>
                            <p className="text-gray-400">Lifetime Value</p>
                            <p className="text-sm text-gray-500">
                              Revenue per customer
                            </p>
                          </div>
                          <span className="font-bold text-2xl text-white bg-[#3FA69B]/10 px-3 py-1 rounded-lg">
                            {results.ltv}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <div>
                            <p className="text-gray-400">LTV:CAC Ratio</p>
                            <p className="text-sm text-gray-500">
                              Efficiency indicator
                            </p>
                          </div>
                          <span
                            className={`font-bold text-2xl px-3 py-1 rounded-lg ${
                              parseFloat(results.ratio) > 3
                                ? "text-green-400 bg-green-900/20"
                                : parseFloat(results.ratio) > 1
                                ? "text-yellow-400 bg-yellow-900/20"
                                : "text-red-400 bg-red-900/20"
                            }`}
                          >
                            {results.ratio}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Financial Metrics */}
                    <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                      <div className="flex items-center mb-5">
                        <div className="p-2 rounded-lg bg-[#3FA69B]/10 mr-4">
                          <svg
                            className="w-6 h-6 text-[#3FA69B]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white">
                          Financial Metrics
                        </h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                          <div>
                            <p className="text-gray-400">
                              Return on Investment
                            </p>
                            <p className="text-sm text-gray-500">
                              Profitability measure
                            </p>
                          </div>
                          <span
                            className={`font-bold text-2xl px-3 py-1 rounded-lg ${
                              parseFloat(results.roi) > 100
                                ? "text-green-400 bg-green-900/20"
                                : parseFloat(results.roi) > 0
                                ? "text-yellow-400 bg-yellow-900/20"
                                : "text-red-400 bg-red-900/20"
                            }`}
                          >
                            {results.roi}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3 border-b border-gray-700/50">
                          <div>
                            <p className="text-gray-400">Payback Period</p>
                            <p className="text-sm text-gray-500">
                              Months to recover CAC
                            </p>
                          </div>
                          <span className="font-bold text-2xl text-white bg-[#3FA69B]/10 px-3 py-1 rounded-lg">
                            {results.payback}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-3">
                          <div>
                            <p className="text-gray-400">Gross Margin</p>
                            <p className="text-sm text-gray-500">
                              Profit percentage
                            </p>
                          </div>
                          <span className="font-bold text-2xl text-white bg-[#3FA69B]/10 px-3 py-1 rounded-lg">
                            {results.margin}%
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Calculation Details */}
                  <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                    <div className="flex items-center mb-4">
                      <div className="p-2 rounded-lg bg-[#3FA69B]/10 mr-4">
                        <svg
                          className="w-6 h-6 text-[#3FA69B]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-white">
                        Calculation Methodology
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <p className="text-[#3FA69B] font-medium mb-2">
                          CAC Formula
                        </p>
                        <p className="text-gray-300 text-sm">
                          (Marketing + Ads +{" "}
                          {model === "PLG" ? "Activation" : "Sales"} Costs) ÷
                          New Customers
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {results.note}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <p className="text-[#3FA69B] font-medium mb-2">
                          LTV Formula
                        </p>
                        <p className="text-gray-300 text-sm">
                          (Price × Gross Margin) ÷ Churn Rate
                        </p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <p className="text-[#3FA69B] font-medium mb-2">
                          ROI Formula
                        </p>
                        <p className="text-gray-300 text-sm">
                          ((LTV – CAC) ÷ CAC) × 100
                        </p>
                      </div>
                      <div className="bg-gray-800/50 p-4 rounded-lg">
                        <p className="text-[#3FA69B] font-medium mb-2">
                          Payback Period
                        </p>
                        <p className="text-gray-300 text-sm">
                          CAC ÷ Monthly Price
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Definitions */}
          <div className="px-8 pb-8">
            <div className="bg-gray-900/50 rounded-xl border border-gray-700/50 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-gray-800/30 transition-colors">
                  <span className="text-xl font-medium text-[#3FA69B] flex items-center">
                    <svg
                      className="w-6 h-6 mr-3 group-open:hidden"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <svg
                      className="w-6 h-6 mr-3 hidden group-open:block"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 12H4"
                      />
                    </svg>
                    Key Metrics Definitions
                  </span>
                  <svg
                    className="ml-2 w-6 h-6 text-[#3FA69B] group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="p-6 pt-2 border-t border-gray-700/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800/50 p-5 rounded-lg">
                      <h4 className="font-bold text-[#3FA69B] mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                        Acquisition Metrics
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        <li>
                          <span className="font-medium text-white">CAC</span> -
                          <span className="text-gray-400 ml-1">
                            Customer Acquisition Cost measures how much you
                            spend to acquire each new customer.
                          </span>
                        </li>
                        <li>
                          <span className="font-medium text-white">
                            Payback Period
                          </span>{" "}
                          -
                          <span className="text-gray-400 ml-1">
                            The time (in months) required to recover the cost of
                            acquiring a customer.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-800/50 p-5 rounded-lg">
                      <h4 className="font-bold text-[#3FA69B] mb-3 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Value Metrics
                      </h4>
                      <ul className="space-y-3 text-gray-300">
                        <li>
                          <span className="font-medium text-white">LTV</span> -
                          <span className="text-gray-400 ml-1">
                            Lifetime Value estimates the total revenue a
                            customer generates during their relationship with
                            your business.
                          </span>
                        </li>
                        <li>
                          <span className="font-medium text-white">
                            Gross Margin
                          </span>{" "}
                          -
                          <span className="text-gray-400 ml-1">
                            The percentage of revenue remaining after accounting
                            for the cost of goods sold.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
