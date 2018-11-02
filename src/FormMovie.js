import React, { Component } from "react";

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      poster: "",
      comment: ""
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    };

    const url = "http://92.175.11.66:3001/api/quests/movies/";

    fetch(url, config)
      .then(res => res.json())
      .then(res => {
        res.error
          ? alert(res.error)
          : alert(`Le film a été ajouté avec l'ID ${res}!`);
      })
      .catch(e => {
        console.error(e);
        alert("Erreur lors de l'ajout d'un film");
      });
  }

  render() {
    return (
      <div className="FormEmployee">
        <h1>Saisi d'un Film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Nom du Film</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={this.onChange}
                value={this.state.name}
                required
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
                required
              />
            </div>

            <div>
              <label htmlFor="comment">Commentaires</label>
              <textarea
                className="textarea"
                type="comment"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
                required
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default FormMovie;
