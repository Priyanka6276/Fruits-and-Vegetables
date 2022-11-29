const React = require("react");
const DefaultLayout = require("../layout/Default")

class Show extends React.Component{
    render() { 
        const fruit = this.props.fruit //it is fruit (singular) because of  fruit: fruits[req.params.indexOfFruit]
        console.log(this.props.fruit)
        return (
            <DefaultLayout title={`${fruit.name} Show Page`}>
              <div>
                <p>
                    The {fruit.name} is {fruit.color}.
                    {fruit.readyToEat ? " It is ready to eat!" : " It is not ready to eat... don't touch that"}
                </p>
              </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show

//js code in the {}

/**
 * If an error shows because of strict mode :
 * const React = require("react");

class Show extends React.Component {
  render() {
    const {name, color, readyToEat} = this.props // <========================= deconstruct it
    return (
      <div>
        <h1>Show Page</h1>

        <div>
          <p>The {name} is {color}.</p>
          {readyToEat? "It is ready to eat!" : "It is not ready to eat... dont touch that"}
        </div> 
      </div>
    )
  }
}
// We can write javascript code within the curly brackets

module.exports = Show
 */