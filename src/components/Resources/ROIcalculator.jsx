import { useState } from "react";
import emailjs from "@emailjs/browser";

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
  const [showModal, setShowModal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSending, setIsSending] = useState(false);

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
        1,
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

    // Show modal after calculations
    setShowModal(true);
  };

  const handleSubmitUserInfo = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: userInfo.name,
          user_email: userInfo.email,
          user_phone: userInfo.phone,
          ...formData,
          model_type: model,
          ...results,
          date: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setShowModal(false);
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to submit your information. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Glowing Header */}
        <div className="relative mb-10">
          <div className="absolute -inset-3 bg-gradient-to-r from-[var(--main-theme-color)] to-[#2a7a72] rounded-xl blur opacity-75"></div>
          <div className="relative bg-gradient-to-r from-[#2a7a72] to-[var(--main-theme-color)] rounded-xl p-6 shadow-lg">
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
                    ? "bg-gradient-to-r from-[var(--main-theme-color)] to-[#2a7a72] text-white shadow-md"
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
                    ? "bg-gradient-to-r from-[var(--main-theme-color)] to-[#2a7a72] text-white shadow-md"
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
            {/* All your existing form inputs remain exactly the same */}
            {/* Core Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[var(--main-theme-color)]"
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
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] placeholder-gray-500 transition-all duration-200"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[var(--main-theme-color)]"
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
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] placeholder-gray-500 transition-all duration-200"
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
                    className="w-4 h-4 mr-2 text-[var(--main-theme-color)]"
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
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] placeholder-gray-500 transition-all duration-200"
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
                    className="w-4 h-4 mr-2 text-[var(--main-theme-color)]"
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
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] placeholder-gray-500 transition-all duration-200"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[var(--main-theme-color)]"
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
                    className="w-full pl-9 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] placeholder-gray-500 transition-all duration-200"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-300 uppercase tracking-wider flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-[var(--main-theme-color)]"
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
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] placeholder-gray-500 transition-all duration-200"
                  placeholder="0"
                />
              </div>
            </div>

            {/* Model-Specific Fields */}
            {model === "PLG" ? (
              <div className="p-6 bg-gray-700/30 rounded-xl border border-gray-600/30 mb-8 backdrop-blur-sm">
                <h3 className="text-lg font-medium text-[var(--main-theme-color)] mb-5 flex items-center">
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
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] transition-all duration-200"
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
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] transition-all duration-200"
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
                <h3 className="text-lg font-medium text-[var(--main-theme-color)] mb-5 flex items-center">
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
                      className="w-full px-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] transition-all duration-200"
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
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] transition-all duration-200"
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
                        className="w-full pl-9 pr-4 py-3 bg-gray-700/70 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)] transition-all duration-200"
                      />
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                        %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* ... */}

            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-[var(--main-theme-color)] to-[#2a7a72] hover:from-[#359186] hover:to-[#1f645c] text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              <span className="relative">
                <span className="absolute -inset-0.5 bg-[var(--main-theme-color)] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></span>
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

          {/* User Info Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-gray-800 rounded-xl max-w-md w-full border border-gray-700/50 shadow-2xl overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[var(--main-theme-color)] mb-4">
                    Get Your Custom Report
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Enter your details to receive your personalized ROI analysis
                  </p>

                  <form onSubmit={handleSubmitUserInfo} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        value={userInfo.name}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, name: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        value={userInfo.email}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, email: e.target.value })
                        }
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={userInfo.phone}
                        onChange={(e) =>
                          setUserInfo({ ...userInfo, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-[var(--main-theme-color)] focus:border-[var(--main-theme-color)]"
                      />
                    </div>

                    <div className="pt-4 flex justify-end space-x-3">
                      <button
                        type="button"
                        onClick={() => setShowModal(false)}
                        className="px-6 py-3 text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-lg transition-colors"
                        disabled={isSending}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gradient-to-r from-[var(--main-theme-color)] to-[#2a7a72] text-white rounded-lg hover:from-[#359186] hover:to-[#1f645c] transition-colors flex items-center justify-center min-w-32"
                        disabled={isSending}
                      >
                        {isSending ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          "View Results"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Results Section (remains visible after modal submission) */}
          {results && (
            <div className="px-8 pb-8">
              {/* Your existing results display */}

              {results && (
                <div className="px-8 pb-8">
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-r from-[var(--main-theme-color)] to-[#2a7a72] rounded-2xl blur opacity-25"></div>
                    <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-gray-700/50">
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        <svg
                          className="w-8 h-8 mr-3 text-[var(--main-theme-color)]"
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
                            <div className="p-2 rounded-lg bg-[var(--main-theme-color)]/10 mr-4">
                              <svg
                                className="w-6 h-6 text-[var(--main-theme-color)]"
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
                              <span className="font-bold text-2xl text-white bg-[var(--main-theme-color)]/10 px-3 py-1 rounded-lg">
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
                              <span className="font-bold text-2xl text-white bg-[var(--main-theme-color)]/10 px-3 py-1 rounded-lg">
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
                            <div className="p-2 rounded-lg bg-[var(--main-theme-color)]/10 mr-4">
                              <svg
                                className="w-6 h-6 text-[var(--main-theme-color)]"
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
                              <span className="font-bold text-2xl text-white bg-[var(--main-theme-color)]/10 px-3 py-1 rounded-lg">
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
                              <span className="font-bold text-2xl text-white bg-[var(--main-theme-color)]/10 px-3 py-1 rounded-lg">
                                {results.margin}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Calculation Details */}
                      <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                        <div className="flex items-center mb-4">
                          <div className="p-2 rounded-lg bg-[var(--main-theme-color)]/10 mr-4">
                            <svg
                              className="w-6 h-6 text-[var(--main-theme-color)]"
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
                            <p className="text-[var(--main-theme-color)] font-medium mb-2">
                              CAC Formula
                            </p>
                            <p className="text-gray-300 text-sm">
                              (Marketing + Ads +{" "}
                              {model === "PLG" ? "Activation" : "Sales"} Costs)
                              ÷ New Customers
                            </p>
                            <p className="text-gray-500 text-xs mt-1">
                              {results.note}
                            </p>
                          </div>
                          <div className="bg-gray-800/50 p-4 rounded-lg">
                            <p className="text-[var(--main-theme-color)] font-medium mb-2">
                              LTV Formula
                            </p>
                            <p className="text-gray-300 text-sm">
                              (Price × Gross Margin) ÷ Churn Rate
                            </p>
                          </div>
                          <div className="bg-gray-800/50 p-4 rounded-lg">
                            <p className="text-[var(--main-theme-color)] font-medium mb-2">
                              ROI Formula
                            </p>
                            <p className="text-gray-300 text-sm">
                              ((LTV – CAC) ÷ CAC) × 100
                            </p>
                          </div>
                          <div className="bg-gray-800/50 p-4 rounded-lg">
                            <p className="text-[var(--main-theme-color)] font-medium mb-2">
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
