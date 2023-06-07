function Tech() {
  return (
    <section className="tech">
      <h2 className="tech__header">Технологии</h2>
      <div className="tech__decorate"></div>
      <article className="tech__article">
        <h3 className="tech__header tech__header_mod_h3">7 технологий</h3>
        <p className="tech__paragraph">На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.</p>
      </article>
      <div className="tech__grid">
        <div className="tech__cell">
          <p className="tech__name-of-tech">HTML</p>
        </div>
        <div className="tech__cell">
          <p className="tech__name-of-tech">CSS</p>
        </div>
        <div className="tech__cell">
          <p className="tech__name-of-tech">JS</p>
        </div>
        <div className="tech__cell">
          <p className="tech__name-of-tech">React</p>
        </div>
        <div className="tech__cell">
          <p className="tech__name-of-tech">Git</p>
        </div>
        <div className="tech__cell">
          <p className="tech__name-of-tech">Express.js</p>
        </div>
        <div className="tech__cell">
          <p className="tech__name-of-tech">mongoDB</p>
        </div>
        

      </div>
    </section>
  );
}
export default Tech;