initSidebarItems({"enum":[["Error",""],["Scope","Identifies the an OAuth2 authorization scope. A scope is needed when requesting an authorization token."]],"fn":[["remove_json_null_values",""]],"struct":[["DefaultDelegate","A delegate with a conservative default implementation, which is used if no other delegate is set."],["Empty","A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`."],["ErrorResponse","A utility to represent detailed errors we might see in case there are BadRequests. The latter happen if the sent parameters or request structures are unsound"],["HttpRequest","A common proto for logging HTTP requests."],["ListLogMetricsResponse","Result returned from ListLogMetrics."],["ListLogServiceIndexesResponse","Result returned from ListLogServiceIndexesRequest."],["ListLogServiceSinksResponse","Result returned from `ListLogServiceSinks`."],["ListLogServicesResponse","Result returned from `ListLogServicesRequest`."],["ListLogSinksResponse","Result returned from `ListLogSinks`."],["ListLogsResponse","Result returned from ListLogs."],["ListSinksResponse","Result returned from `ListSinks`."],["Log","_Output only._ Describes a log, which is a named stream of log entries."],["LogEntry","An individual entry in a log."],["LogEntryMetadata","Additional data that is associated with a log entry, set by the service creating the log entry."],["LogError","Describes a problem with a logging resource or operation."],["LogMetric","Describes a collected, logs-based metric. The value of the metric is the number of log entries in the project that match the advanced logs filter in the `filter` field."],["LogService","_Output only._ Describes a service that writes log entries."],["LogSink","Describes where log entries are written outside of Cloud Logging."],["Logging","Central instance to access all Logging related resource activities"],["MethodInfo","Contains information about an API request."],["MultiPartReader","Provides a `Read` interface that converts multiple parts into the protocol identified by RFC2387. **Note**: This implementation is just as rich as it needs to be to perform uploads to google APIs, and might not be a fully-featured implementation."],["ProjectLogDeleteCall","Deletes a log and all its log entries. The log will reappear if it receives new entries."],["ProjectLogEntryWriteCall","Writes log entries to Cloud Logging. Each entry consists of a `LogEntry` object. You must fill in all the fields of the object, including one of the payload fields. You may supply a map, `commonLabels`, that holds default (key, value) data for the `entries[].metadata.labels` map in each entry, saving you the trouble of creating identical copies for each entry."],["ProjectLogListCall","Lists the logs in the project. Only logs that have entries are listed."],["ProjectLogServiceIndexeListCall","Lists the current index values for a log service."],["ProjectLogServiceListCall","Lists the log services that have log entries in this project."],["ProjectLogServiceSinkCreateCall","Creates a log service sink. All log entries from a specified log service are written to the destination."],["ProjectLogServiceSinkDeleteCall","Deletes a log service sink. After deletion, no new log entries are written to the destination."],["ProjectLogServiceSinkGetCall","Gets a log service sink."],["ProjectLogServiceSinkListCall","Lists log service sinks associated with a log service."],["ProjectLogServiceSinkUpdateCall","Updates a log service sink. If the sink does not exist, it is created."],["ProjectLogSinkCreateCall","Creates a log sink. All log entries for a specified log are written to the destination."],["ProjectLogSinkDeleteCall","Deletes a log sink. After deletion, no new log entries are written to the destination."],["ProjectLogSinkGetCall","Gets a log sink."],["ProjectLogSinkListCall","Lists log sinks associated with a log."],["ProjectLogSinkUpdateCall","Updates a log sink. If the sink does not exist, it is created."],["ProjectMethods","A builder providing access to all methods supported on *project* resources. It is not used directly, but through the `Logging` hub."],["ProjectMetricCreateCall","Create the specified log metric resource."],["ProjectMetricDeleteCall","Deletes the specified log metric."],["ProjectMetricGetCall","Get the specified log metric resource."],["ProjectMetricListCall","List log metrics associated with the specified project."],["ProjectMetricUpdateCall","Create or update the specified log metric resource."],["ProjectSinkCreateCall","Creates a project sink. A logs filter determines which log entries are written to the destination."],["ProjectSinkDeleteCall","Deletes a project sink. After deletion, no new log entries are written to the destination."],["ProjectSinkGetCall","Gets a project sink."],["ProjectSinkListCall","Lists project sinks associated with a project."],["ProjectSinkUpdateCall","Updates a project sink. If the sink does not exist, it is created. The destination, filter, or both may be updated."],["Status","The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by gRPC. The error model is designed to be: - Simple to use and understand for most users - Flexible enough to meet unexpected needs # Overview The `Status` message contains three pieces of data: error code, error message, and error details. The error code should be an enum value of google.rpc.Code, but it may accept additional error codes if needed. The error message should be a developer-facing English message that helps developers *understand* and *resolve* the error. If a localized user-facing error message is needed, put the localized message in the error details or localize it in the client. The optional error details may contain arbitrary information about the error. There is a predefined set of error detail types in the package `google.rpc` which can be used for common error conditions. # Language mapping The `Status` message is the logical representation of the error model, but it is not necessarily the actual wire format. When the `Status` message is exposed in different client libraries and different wire protocols, it can be mapped differently. For example, it will likely be mapped to some exceptions in Java, but more likely mapped to some error codes in C. # Other uses The error model and the `Status` message can be used in a variety of environments, either with or without APIs, to provide a consistent developer experience across different environments. Example uses of this error model include: - Partial errors. If a service needs to return partial errors to the client, it may embed the `Status` in the normal response to indicate the partial errors. - Workflow errors. A typical workflow has multiple steps. Each step may have a `Status` message for error reporting purpose. - Batch operations. If a client uses batch request and batch response, the `Status` message should be used directly inside batch response, one for each error sub-response. - Asynchronous operations. If an API call embeds asynchronous operation results in its response, the status of those operations should be represented directly using the `Status` message. - Logging. If some API errors are stored in logs, the message `Status` could be used directly after any stripping needed for security/privacy reasons."],["WriteLogEntriesRequest","The parameters to WriteLogEntries."],["WriteLogEntriesResponse","Result returned from WriteLogEntries. empty"]],"trait":[["CallBuilder","Identifies types which represent builders for a particular resource method"],["Delegate","A trait specifying functionality to help controlling any request performed by the API. The trait has a conservative default implementation."],["Hub","Identifies the Hub. There is only one per library, this trait is supposed to make intended use more explicit. The hub allows to access all resource methods more easily."],["MethodsBuilder","Identifies types for building methods of a particular resource type"],["NestedType","Identifies types which are only used by other types internally. They have no special meaning, this trait just marks them for completeness."],["Part","Identifies types which are only used as part of other types, which usually are carrying the `Resource` trait."],["ReadSeek","A utility to specify reader types which provide seeking capabilities too"],["RequestValue","Identifies types which are used in API requests."],["Resource","Identifies types which can be inserted and deleted. Types with this trait are most commonly used by clients of this API."],["ResponseResult","Identifies types which are used in API responses."],["ToParts","A trait for all types that can convert themselves into a *parts* string"]],"type":[["Result","A universal result type used as return for all calls."]]});