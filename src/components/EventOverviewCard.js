import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import dateTimeRange from "../util/dateTimeRange";

class EventOverviewCard extends React.Component {
  render() {
    const { event } = this.props;
    const { organisers, startDateTime, endDateTime } = event;
    const organiserString = organisers
      .map(o => `${o.firstname} ${o.lastname}`)
      .join(", ");
    return (
      <div
        style={{ margin: "16px auto", width: "60vw", minWidth: 300 }}
        className="fancy-render-animation"
      >
        <Card elevation={8}>
          <CardActionArea component={Link} to={`/events/${event._id}`}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {event.name}
              </Typography>
              <Typography color="textSecondary">
                {dateTimeRange(startDateTime, endDateTime)}
              </Typography>
              <Typography color="textSecondary">
                Organised by: {organiserString}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default EventOverviewCard;
