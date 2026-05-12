import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { motion } from "framer-motion";

interface QuizQuestion {
  key: string;
  question: string;
  options: string[][];
}

interface QuizModalProps {
  quizOpen: boolean;
  setQuizOpen: (value: boolean) => void;
  quizStep: number;
  setQuizStep: (value: number) => void;
  quizQuestions: QuizQuestion[];
  quizAnswers: Record<string, string>;
  setQuizAnswers: (value: Record<string, string>) => void;
  updateQuizAnswer: (key: string, value: string) => void;
  recommendedPath: string;
  bookingLink: string;
  scrollToForm: (formType: string) => void;
}

export default function QuizModal({
  quizOpen,
  setQuizOpen,
  quizStep,
  setQuizStep,
  quizQuestions,
  quizAnswers,
  setQuizAnswers,
  updateQuizAnswer,
  recommendedPath,
  bookingLink,
  scrollToForm,
}: QuizModalProps) {
  if (!quizOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/55 px-5 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-2xl"
      >
        <div className="mb-6 flex items-start justify-between gap-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              Quick mobility quiz
            </p>

            <h2 className="mt-2 text-3xl font-black text-slate-950">
              Find your best starting point.
            </h2>
          </div>

          <button
            onClick={() => setQuizOpen(false)}
            className="rounded-full border border-slate-200 p-2 transition hover:bg-slate-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {quizStep < quizQuestions.length ? (
          <div>
            <div className="mb-5 h-2 rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400"
                style={{
                  width: `${((quizStep + 1) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>

            <h3 className="text-xl font-black text-slate-950">
              {quizQuestions[quizStep].question}
            </h3>

            <div className="mt-5 grid gap-3">
              {quizQuestions[quizStep].options.map(([value, label]) => (
                <button
                  key={value}
                  onClick={() =>
                    updateQuizAnswer(quizQuestions[quizStep].key, value)
                  }
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left font-bold text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6">
            <CheckCircle2 className="h-9 w-9 text-teal-500" />

            <h3 className="mt-4 text-2xl font-black text-slate-950">
              Recommended path:
            </h3>

            <p className="mt-2 text-xl font-black text-sky-700">
              {recommendedPath}
            </p>

            <p className="mt-3 leading-7 text-slate-600">
              This is not a diagnosis. It is just a starting recommendation
              based on what you selected.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={bookingLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-400 px-6 py-3 text-sm font-black text-white shadow-xl shadow-sky-100 transition hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                Book assessment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>

              <button
                onClick={() => {
                  setQuizOpen(false);
                  scrollToForm(`Quiz result: ${recommendedPath}`);
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl hover:shadow-sky-100"
              >
                Send my details
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => {
            setQuizStep(0);
            setQuizAnswers({});
          }}
          className="mt-5 text-sm font-bold text-slate-500 transition hover:text-sky-600"
        >
          Restart quiz
        </button>
      </motion.div>
    </div>
  );
}