exports.default = function Faq({ ctx, name }) {
  if (name == "backend")
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-8 md:py-8">
          <div className="md:gap-4">
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
              <p className="px-2 mb-4 font-bold leading-tight text-2xl md:text-3xl text-right ltr:text-left">
                أسئلة متكررة
              </p>
              <div className="space-y-2">
                <details className="group rounded-lg border border-gray-200 shadow-md">
                  <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer">
                    <h5 className="font-bold text-gray-800">📌 كيف يمكنني التسجيل في التدريب؟</h5>
                    <svg className="flex-shrink-0 mx-1 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 my-3 leading-relaxed text-gray-800 grid grid-cols-1">
                    <span>املأ الاستمارة الخاصة بالتدريب.</span>
                    <span>بعد التسجيل، سنرسل لك RIB الخاص بالدفع.</span>
                    <span>بعد تأكيد الدفع، أرسل لنا إثبات الدفع.</span>
                    <span>ستتم إضافتك إلى مجموعة واتساب الخاصة بالمجموعة.</span>
                  </p>
                </details>
                <details className="group rounded-lg border border-gray-200 shadow-md">
                  <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer">
                    <h5 className="font-bold text-gray-800">💳 ما هي طرق الدفع المتاحة؟</h5>
                    <svg className="flex-shrink-0 mx-1 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 my-3 leading-relaxed text-gray-800 grid grid-cols-1">
                    <span>الدفع عن طريق تحويل بنكي (Virement Bancaire).</span>
                    <span>يمكنك التواصل معنا في حال كنت بحاجة لمزيد من التفاصيل حول الدفع.</span>
                  </p>
                </details>
                <details className="group rounded-lg border border-gray-200 shadow-md">
                  <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer">
                    <h5 className="font-bold text-gray-800">🤔 هل يجب أن أكون متمكناً من البرمجة قبل البدء؟</h5>
                    <svg className="flex-shrink-0 mx-1 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 my-3 leading-relaxed text-gray-800 grid grid-cols-1">
                    <span>لا! هذا التدريب مصمم لجميع المستويات، حتى لو لم تكن لديك أي خبرة سابقة في البرمجة.</span>
                    <span>📌 المدربون سيبدأون معك من الصفر، خطوة بخطوة حتى تصبح جاهزًا للعمل في المجال.</span>
                  </p>
                </details>
                <details className="group rounded-lg border border-gray-200 shadow-md">
                  <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer">
                    <h5 className="font-bold text-gray-800">🏡 هل يجب أن أذهب إلى مكان معين لحضور التدريب؟</h5>
                    <svg className="flex-shrink-0 mx-1 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 my-3 leading-relaxed text-gray-800 grid grid-cols-1">
                    <span>لا! التدريب 100% عن بُعد، يمكنك التعلم من أي مكان في المغرب (أو حتى من أي مكان في العالم).</span>
                    <span>كل ما تحتاجه هو حاسوب واتصال بالإنترنت، ونحن سنكون معك في كل خطوة.</span>
                  </p>
                </details>
                <details className="group rounded-lg border border-gray-200 shadow-md">
                  <summary className="flex items-center justify-between p-3 rounded-lg cursor-pointer">
                    <h5 className="font-bold text-gray-800">🎯 لماذا هذا التدريب هو الخيار المثالي لك؟</h5>
                    <svg className="flex-shrink-0 mx-1 w-5 h-5 transition duration-300 group-open:-rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="px-4 my-3 leading-relaxed text-gray-800 grid grid-cols-1">
                    <span>تعلم أسرع: في 3 أشهر فقط ستتمكن من تطوير تطبيقات حقيقية!</span>
                    <span>تدريب عملي: مشاريع حقيقية لإضافة خبرة قوية إلى سيرتك الذاتية.</span>
                    <span>مدربون محترفون: إرشاد مستمر من خبراء في المجال.</span>
                    <span>شهادة معتمدة: لتعزيز فرصك في سوق العمل.</span>
                    <span>فرص توظيف: تأهلك للحصول على وظيفة في مجال البرمجة بعد التدريب!</span>
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  return <></>;
};
