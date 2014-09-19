import ResultsLoader from "./results-loader";
import Order from "balanced-dashboard/models/order";

var OrdersResultsLoader = ResultsLoader.extend({
	resultsType: Order,

	queryStringArguments: function() {
		var queryStringBuilder = new Balanced.ResultsLoaderQueryStringBuilder();

		queryStringBuilder.addValues({
			limit: this.get("limit"),
			sort: this.get("sort"),

			"created_at[>]": this.get("startTime"),
			"created_at[<]": this.get("endTime"),
		});

		return queryStringBuilder.getQueryStringAttributes();
	}.property("sort", "startTime", "endTime", "limit")
});

export default OrdersResultsLoader;