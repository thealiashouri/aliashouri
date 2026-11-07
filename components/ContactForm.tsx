"use client";

import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleFormAction = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === "loading") return;

    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanEmail = email.trim();
    const cleanPrice = price.trim();
    const cleanDesc = desc.trim();

    if (!cleanName || !cleanPhone || !cleanEmail || !cleanPrice || !cleanDesc) {
      setStatus("error");
      setErrorMessage("لطفاً تمام فیلدها را تکمیل کنید.");
      return;
    }

    const normalizedPhone = cleanPhone.replace(/[\s()-]/g, "");

    if (!/^\+?[0-9]{10,15}$/.test(normalizedPhone)) {
      setStatus("error");
      setErrorMessage("لطفاً شماره تماس معتبر وارد کنید.");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const message = [
      "📩 درخواست جدید طراحی سایت",
      "",
      `👤 نام و نام خانوادگی: ${cleanName}`,
      `📞 شماره تماس: ${cleanPhone}`,
      `📧 ایمیل: ${cleanEmail}`,
      `💰 بودجه: ${cleanPrice} تومان`,
      "",
      "📝 توضیحات پروژه:",
      cleanDesc,
    ].join("\n");

    // توکن جدید ربات را جایگزین کنید.
    // توجه: توکن در کد سمت کلاینت قابل مشاهده است.
    const telegramBotToken = "توکن_جدید_ربات";
    const chatId = "1932348212";

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error("ارسال درخواست به تلگرام ناموفق بود.");
      }

      setStatus("success");

      setName("");
      setPhone("");
      setEmail("");
      setPrice("");
      setDesc("");
    } catch (error) {
      console.error("Telegram send error:", error);

      setStatus("error");
      setErrorMessage("ارسال انجام نشد. اتصال اینترنت و تنظیمات ربات را بررسی کنید.");
    }
  };

  const inputClass =
    "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60";

  const labelClass = "mb-2 block text-sm font-semibold text-gray-700";

  return (
    <section dir="rtl" className="mx-auto my-10 w-full max-w-xl px-4">
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50">
        <div className="bg-gradient-to-l from-blue-700 to-blue-500 px-6 py-7 text-white sm:px-8">
          <p className="mb-2 text-sm text-blue-100">شروع یک همکاری حرفه‌ای</p>

          <h2 className="text-2xl font-extrabold sm:text-3xl">ثبت درخواست طراحی سایت</h2>
          <p className="mt-3 text-sm leading-7 text-blue-50">
            برای ارسال موفق درخواست، لطفاً پیش از ادامه، فیلترشکن خود را روشن کنید.
          </p>

          <p className="mt-3 text-sm leading-7 text-blue-50">
            اطلاعات پروژه‌ات رو وارد کن تا درخواستت بررسی بشه و برای هماهنگی باهات تماس بگیریم.
          </p>
        </div>

        <form onSubmit={handleFormAction} className="space-y-5 p-6 sm:p-8">
          <div>
            <label htmlFor="name" className={labelClass}>
              نام و نام خانوادگی
            </label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              maxLength={100}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputClass}
              placeholder="نام خود را وارد کنید"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label htmlFor="phone" className={labelClass}>
              شماره تماس
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              dir="ltr"
              required
              maxLength={20}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`${inputClass} text-left`}
              placeholder="09123456789"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              ایمیل
            </label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              dir="ltr"
              required
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`${inputClass} text-left`}
              placeholder="name@example.com"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label htmlFor="price" className={labelClass}>
              بودجه تقریبی (تومان)
            </label>

            <input
              id="price"
              name="budget"
              type="text"
              required
              maxLength={100}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={inputClass}
              placeholder="مثلاً ۲۰ میلیون تومان"
              disabled={status === "loading"}
            />
          </div>

          <div>
            <label htmlFor="desc" className={labelClass}>
              توضیحات پروژه
            </label>

            <textarea
              id="desc"
              name="message"
              required
              minLength={10}
              maxLength={3000}
              rows={5}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className={`${inputClass} resize-y`}
              placeholder="چه نوع سایتی نیاز داری و چه امکاناتی مدنظرت هست؟"
              disabled={status === "loading"}
            />

            <p className="mt-2 text-left text-xs text-gray-400">{desc.length}/3000</p>
          </div>

          {status === "success" && (
            <div
              role="status"
              aria-live="polite"
              className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm leading-6 text-green-800"
            >
              ✓ درخواستت با موفقیت به تلگرام ارسال شد.
            </div>
          )}

          {status === "error" && (
            <div role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700">
              ✕ {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" && (
              <span
                aria-hidden="true"
                className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white"
              />
            )}

            {status === "loading" ? "در حال ارسال..." : "ثبت درخواست طراحی سایت"}
          </button>

          <p className="text-center text-xs leading-6 text-gray-400">
            اطلاعات شما فقط برای پیگیری درخواست و هماهنگی پروژه استفاده می‌شود.
          </p>
        </form>
      </div>
    </section>
  );
}
