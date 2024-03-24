import Store from "../store/index"

function QuizResult ({result, show}) {
    return (
        <section className={`quiz__result ${show >= Store.quiz.questions.length ? '--show' : ''}`}>
        <h3 className="quiz__summary">
          Ви відповіли правильно на {result} із {Store.quiz.questions.length} запитаннь
        </h3>
        <button onClick={() => window.location.reload()}>Запустити Quiz з початку</button>
      </section>
    )
}

export default QuizResult