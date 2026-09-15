import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Test() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('بيانات الطلب:', formData);
    alert('تم إرسال الطلب بنجاح!');
  };

  return (
    <div className="min-h-screen bg-white p-6 relative font-sans" dir="rtl">

      {/* زر العودة للخلف */}
      <div className="mb-6 flex justify-start" dir="ltr">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors shadow-sm"
          title="العودة للخلف"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
      </div>

      {/*الحاوية الرئيسية */}

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-t border-gray-100 pt-6">

        {/* القسم الأيمن: تفاصيل المنتج */}

        <div className="flex flex-col items-center md:border-l md:pl-8">
          {/*جزء المنتج */}

          <h2 className="text-xl font-bold text-gray-800 self-start mb-6 ">المنتج</h2>

          {/*جزء الصورة */}

          <div className="w-48 h-48 mb-4 flex items-center justify-center">
            <img
              src="/tawabil.jpg"
              alt="عسل الكالبتوس"
              className="max-h-full max-w-full object-contain"
            />

            <p className="text-sm font-semibold text-gray-700 mb-2">عسل الكاليتوس-miel d'eucalituptus 500g</p>
            <p className="text-sm font-bold text-gray-700 mb-4">
              3.500 da
            </p>
            <button className="bg-[#222222] text-white text-xs px-6 py-2.5 rounded-md hover:bg-black transition-colors">
              ajouter au panier
            </button>
          </div>

          {/* القسم الأيسر: نموذج معلومات الشحن والتوصيل */}

          <div className="flex flex-col items-center px-4">

            {/* الشعار */}
            <h1 className="text-4xl font-serif text-gray-900 mb-4 tracking-wide">
              la cacia
            </h1>
            <hr className="border-gray-300 mb-6 w-full" />
            <h2 className="text-xl font-bold text-gray-800 mb-6">
              معلومات الشحن و التوصيل
            </h2>
            <form onSubmit={handleSubmit} className="w-full space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="اسم المستلم"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded-lg p-2.5 text-right text-sm outLine-none focus:border-green-600 transition-colors"
                  required
                />
                <span className="block mt-1 text-gray-500 text-[11px]">يرجى كتابة الاسم و اللقب</span>
              </div>

              {/*رقم الهاتف */}

              <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="رقم الهاتف"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded-lg p-2.5 text-right text-sm outLine-none focus:border-green-600 transition-colors "
                  required
                />
                <span className="block mt-1 text-gray-500 text-[11px]">يرجى كتابة رقم الهاتف</span>
              </div>

              {/* العنوان */}

              <div>
                <input
                  type="text"
                  name="address"
                  placeholder="العنوان"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded-lg p-2.5 text-right text-sm outLine-none focus:border:green-600 transition-colors"
                  required
                />
                <span className="block mt-1 text-gray-500 text-[11px]">يرجى كتابة العنوان</span>
              </div>

              {/*الملاحظة */}

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1">ملاحظة</label>
                <input
                  type="text"
                  name="notes"
                  placeholder="ملاحظات و توصيات الطلب"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full border border-gray-400 rounded-lg p-2.5 text-right text-sm outLine-none focus:border-600 transition-colors"
                  required
                />
              </div>

              {/*طريقة الدفع */}

              <div className="pt-4 text-center">
                <h3
                  className="text-lg font-bold text-gray-800 mb-6">الدفع عند الاستلام
                </h3>

                {/*ازرار الاجراءات */}

                <div className="flex justify-center items-center gap-4">

                  {/*زر ارسال الطلب */}

                  <button
                    type="submit"
                    className="bg-[#52c47c] hover:bg-[#43a868] text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm text-sm">
                    ارسال الطلب
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </button>

                  {/*زر العودة لسلة التسوق */}

                  <button
                    type="button"
                    onClick={() => navigate('/')}
                    className="bg-[#52c47c] hover:bg-[#43a868] text-white px-4 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-colors shadow-sm text-sm"
                  >
                    العودة لسلة التسوق
                    <svg className="w-5 h-5 fill-current rotate-180" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}