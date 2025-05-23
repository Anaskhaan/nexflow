// import { useState } from "react";
// import "./App.css";

// function ROIcalculator() {
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
//   const [results, setResults] = useState({
//     cac: "",
//     ltv: "",
//     ratio: "",
//     roi: "",
//     payback: "",
//     note: "",
//     showResults: false,
//   });

//   const handleModelChange = (e) => {
//     setModel(e.target.value);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
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
//       alert("Enter churn and customer numbers.");
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
//       note: note,
//       showResults: true,
//       margin: Math.round(margin * 100),
//     });
//   };

//   return (
//     <div className="app">
//       <h1>SaaS ROI Calculator</h1>

//       <form onSubmit={calculateMetrics}>
//         {/* Model */}
//         <label>
//           Product Model
//           <select
//             id="model"
//             value={model}
//             onChange={handleModelChange}
//             required
//           >
//             <option value="PLG">PLG / Self-Serve</option>
//             <option value="SUB">Sales-Led Subscription</option>
//           </select>
//         </label>

//         {/* Core revenue */}
//         <label>
//           Monthly Price (ARPU / ARPA)
//           <input
//             name="price"
//             type="number"
//             step="0.01"
//             value={formData.price}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Gross Margin % (default 80)
//           <input
//             name="margin"
//             type="number"
//             step="0.1"
//             placeholder="80"
//             value={formData.margin}
//             onChange={handleInputChange}
//           />
//         </label>
//         <label>
//           Monthly Churn %
//           <input
//             name="churn"
//             type="number"
//             step="0.01"
//             value={formData.churn}
//             onChange={handleInputChange}
//             required
//           />
//         </label>

//         {/* Acquisition */}
//         <label>
//           Marketing Spend (month)
//           <input
//             name="mktSpend"
//             type="number"
//             step="0.01"
//             value={formData.mktSpend}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           Ad Spend (month)
//           <input
//             name="adSpend"
//             type="number"
//             step="0.01"
//             value={formData.adSpend}
//             onChange={handleInputChange}
//             required
//           />
//         </label>
//         <label>
//           New Customers (month)
//           <input
//             name="newCust"
//             type="number"
//             value={formData.newCust}
//             onChange={handleInputChange}
//             required
//           />
//         </label>

//         {/* PLG */}
//         <fieldset id="plgFields" hidden={model !== "PLG"}>
//           <legend>PLG-specific</legend>
//           <label>
//             Activation Cost / Customer
//             <input
//               name="activationCost"
//               type="number"
//               step="0.01"
//               value={formData.activationCost}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Free-to-Paid Conversion %
//             <input
//               name="convRate"
//               type="number"
//               step="0.1"
//               value={formData.convRate}
//               onChange={handleInputChange}
//             />
//           </label>
//         </fieldset>

//         {/* Subscription */}
//         <fieldset id="subFields" hidden={model === "PLG"}>
//           <legend>Sales-Led Specific</legend>
//           <label>
//             # Sales Reps
//             <input
//               name="numReps"
//               type="number"
//               value={formData.numReps}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Avg Salary / Rep (month)
//             <input
//               name="salary"
//               type="number"
//               step="0.01"
//               value={formData.salary}
//               onChange={handleInputChange}
//             />
//           </label>
//           <label>
//             Commission % per Sale
//             <input
//               name="commission"
//               type="number"
//               step="0.1"
//               value={formData.commission}
//               onChange={handleInputChange}
//             />
//           </label>
//         </fieldset>

//         <button type="submit">Calculate</button>
//       </form>

//       {/* Definitions */}
//       <details id="defs">
//         <summary>
//           <strong>Field definitions (click to expand)</strong>
//         </summary>
//         <ul>
//           <li>
//             <strong>ARPU / ARPA</strong> – Avg monthly revenue per user/account.
//           </li>
//           <li>
//             <strong>Gross Margin %</strong> – (Revenue – COGS) ÷ Revenue × 100.
//           </li>
//           <li>
//             <strong>Monthly Churn %</strong> – % customers cancelling each
//             month.
//           </li>
//           <li>
//             <strong>Marketing Spend</strong> – Total marketing budget per month.
//           </li>
//           <li>
//             <strong>Ad Spend</strong> – Paid ads budget per month.
//           </li>
//           <li>
//             <strong>New Customers</strong> – Customers acquired in the month.
//           </li>
//           <li>
//             <strong>Activation Cost</strong> – PLG onboarding/support cost per
//             user.
//           </li>
//           <li>
//             <strong>Free-to-Paid %</strong> – PLG free users converting to paid.
//           </li>
//           <li>
//             <strong>Sales Reps</strong> – Count of quota-carrying reps.
//           </li>
//           <li>
//             <strong>Salary / Rep</strong> – Monthly base salary per rep.
//           </li>
//           <li>
//             <strong>Commission %</strong> – Rep commission on each sale.
//           </li>
//         </ul>
//       </details>

//       {/* Results */}
//       {results.showResults && (
//         <section id="results">
//           <h2>Your Metrics</h2>
//           <table>
//             <tr>
//               <th>Metric</th>
//               <th>Value</th>
//             </tr>
//             <tr>
//               <td>CAC</td>
//               <td>{results.cac}</td>
//             </tr>
//             <tr>
//               <td>LTV</td>
//               <td>{results.ltv}</td>
//             </tr>
//             <tr>
//               <td>LTV : CAC</td>
//               <td>{results.ratio}</td>
//             </tr>
//             <tr>
//               <td>ROI</td>
//               <td>{results.roi}</td>
//             </tr>
//             <tr>
//               <td>Payback</td>
//               <td>{results.payback}</td>
//             </tr>
//           </table>

//           <h3>Assumptions & Formulae</h3>
//           <ul>
//             <li>CAC = (Marketing + Ads + Model-Cost) ÷ New Customers</li>
//             <li>{results.note}</li>
//             <li>LTV = Price × Gross Margin ÷ Churn</li>
//             <li>ROI = ((LTV – CAC) ÷ CAC) × 100</li>
//             <li>Gross Margin assumed {results.margin} %</li>
//           </ul>
//         </section>
//       )}
//     </div>
//   );
// }

// export default ROIcalculator;

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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#2a7a72] to-[#3FA69B] rounded-t-xl p-6 shadow-lg">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">
              SaaS Business Metrics Calculator
            </h1>
            <p className="mt-2 text-gray-100 opacity-90">
              Optimize your customer acquisition strategy with data-driven
              insights
            </p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-b-xl shadow-2xl overflow-hidden">
          {/* Model Toggle */}
          <div className="px-6 pt-6">
            <div className="inline-flex rounded-md shadow-sm bg-gray-700 overflow-hidden border border-gray-600">
              <button
                type="button"
                onClick={() => setModel("PLG")}
                className={`py-3 px-6 text-sm font-medium transition-colors ${
                  model === "PLG"
                    ? "bg-[#3FA69B] text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-600"
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg
                    className={`w-4 h-4 mr-2 ${
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
                  Product-Led Growth
                </span>
              </button>
              <button
                type="button"
                onClick={() => setModel("SUB")}
                className={`py-3 px-6 text-sm font-medium transition-colors ${
                  model === "SUB"
                    ? "bg-[#3FA69B] text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-600"
                }`}
              >
                <span className="flex items-center justify-center">
                  <svg
                    className={`w-4 h-4 mr-2 ${
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
                  Sales-Led Subscription
                </span>
              </button>
            </div>
          </div>

          <form onSubmit={calculateMetrics} className="p-6 space-y-6">
            {/* Core Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 flex items-center">
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
                  Monthly Price ($)
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
                    className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 flex items-center">
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
                  Gross Margin (%)
                </label>
                <div className="relative">
                  <input
                    name="margin"
                    type="number"
                    step="0.1"
                    value={formData.margin}
                    onChange={handleInputChange}
                    className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500"
                    placeholder="80"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    %
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 flex items-center">
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
                  Monthly Churn (%)
                </label>
                <div className="relative">
                  <input
                    name="churn"
                    type="number"
                    step="0.01"
                    value={formData.churn}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500"
                    placeholder="0.00"
                  />
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    %
                  </span>
                </div>
              </div>
            </div>

            {/* Acquisition Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 flex items-center">
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
                  Marketing Spend ($)
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
                    className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 flex items-center">
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
                  Ad Spend ($)
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
                    className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300 flex items-center">
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
                  className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B] placeholder-gray-500"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Model-Specific Fields */}
            {model === "PLG" ? (
              <div className="p-5 bg-gray-700/50 rounded-lg border border-[#3f4e58] backdrop-blur-sm">
                <h3 className="text-lg font-medium text-[#3FA69B] mb-4 flex items-center">
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  PLG-Specific Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Activation Cost ($)
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
                        className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Free-to-Paid (%)
                    </label>
                    <div className="relative">
                      <input
                        name="convRate"
                        type="number"
                        step="0.1"
                        value={formData.convRate}
                        onChange={handleInputChange}
                        className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
                      />
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 bg-gray-700/50 rounded-lg border border-[#3f4e58] backdrop-blur-sm">
                <h3 className="text-lg font-medium text-[#3FA69B] mb-4 flex items-center">
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
                  Sales-Led Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      # Sales Reps
                    </label>
                    <input
                      name="numReps"
                      type="number"
                      value={formData.numReps}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Salary/Rep ($)
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
                        className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-300">
                      Commission (%)
                    </label>
                    <div className="relative">
                      <input
                        name="commission"
                        type="number"
                        step="0.1"
                        value={formData.commission}
                        onChange={handleInputChange}
                        className="w-full pl-8 pr-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-[#3FA69B] focus:border-[#3FA69B]"
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
              className="w-full py-3.5 px-6 bg-gradient-to-r from-[#3FA69B] to-[#2a7a72] hover:from-[#359186] hover:to-[#1f645c] text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              Calculate Metrics
            </button>
          </form>

          {/* Results Section */}
          {results && (
            <div className="px-6 pb-8">
              <div className="bg-gradient-to-r from-[#2a7a72] to-[#3FA69B] rounded-xl p-6 shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
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
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  Performance Metrics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-800/80 p-5 rounded-lg backdrop-blur-sm border border-gray-700">
                    <h3 className="text-lg font-medium text-gray-300 mb-4 border-b border-gray-700 pb-2 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-[#3FA69B]"
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
                      Customer Metrics
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-300">
                          Customer Acquisition Cost (CAC)
                        </span>
                        <span className="font-bold text-xl text-white">
                          {results.cac}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-300">
                          Lifetime Value (LTV)
                        </span>
                        <span className="font-bold text-xl text-white">
                          {results.ltv}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">LTV:CAC Ratio</span>
                        <span className="font-bold text-xl text-white">
                          {results.ratio}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800/80 p-5 rounded-lg backdrop-blur-sm border border-gray-700">
                    <h3 className="text-lg font-medium text-gray-300 mb-4 border-b border-gray-700 pb-2 flex items-center">
                      <svg
                        className="w-5 h-5 mr-2 text-[#3FA69B]"
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
                      Financial Metrics
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-300">
                          Return on Investment (ROI)
                        </span>
                        <span className="font-bold text-xl text-white">
                          {results.roi}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-700/50">
                        <span className="text-gray-300">Payback Period</span>
                        <span className="font-bold text-xl text-white">
                          {results.payback}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-300">Gross Margin</span>
                        <span className="font-bold text-xl text-white">
                          {results.margin}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/80 p-5 rounded-lg backdrop-blur-sm border border-gray-700">
                  <h3 className="text-lg font-medium text-gray-300 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-[#3FA69B]"
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
                    Calculation Details
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start">
                      <span className="text-[#3FA69B] mr-2">•</span>
                      <span>
                        CAC = (Marketing + Ads + Model-Cost) ÷ New Customers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3FA69B] mr-2">•</span>
                      <span>{results.note}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3FA69B] mr-2">•</span>
                      <span>LTV = Price × Gross Margin ÷ Churn</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#3FA69B] mr-2">•</span>
                      <span>ROI = ((LTV – CAC) ÷ CAC) × 100</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Definitions */}
          <div className="px-6 pb-6">
            <div className="bg-gray-800/80 rounded-lg border border-gray-700 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-700/50 transition-colors">
                  <span className="text-lg font-medium text-[#3FA69B] flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 group-open:hidden"
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
                      className="w-5 h-5 mr-2 hidden group-open:block"
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
                    className="ml-2 w-5 h-5 text-[#3FA69B] group-open:rotate-180 transition-transform"
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
                <div className="p-4 pt-2 border-t border-gray-700">
                  <ul className="space-y-3 text-gray-300">
                    <li>
                      <span className="font-medium text-[#3FA69B]">
                        ARPU/ARPA
                      </span>{" "}
                      –
                      <span className="text-gray-400 ml-1">
                        Average monthly revenue per user/account.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-[#3FA69B]">
                        Gross Margin
                      </span>{" "}
                      –
                      <span className="text-gray-400 ml-1">
                        (Revenue – COGS) ÷ Revenue × 100.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-[#3FA69B]">
                        Monthly Churn
                      </span>{" "}
                      –
                      <span className="text-gray-400 ml-1">
                        Percentage of customers cancelling each month.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-[#3FA69B]">CAC</span> –
                      <span className="text-gray-400 ml-1">
                        Customer Acquisition Cost.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-[#3FA69B]">LTV</span> –
                      <span className="text-gray-400 ml-1">
                        Lifetime Value of a customer.
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
