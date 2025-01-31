// ---------------------------------------------------------------------------------------
// Date Range (Presets) example - simple PresetDateRangeItem subclass for recent ranges
// ---------------------------------------------------------------------------------------

isc.defineClass("RecentDateRangeItem", "PresetDateRangeItem").addProperties({
    options: {
        "Previous Month" :
            { _constructor: "AdvancedCriteria", operator: "and", 
                criteria: [
                    { fieldName: "orderDate", operator: "greaterThan", 
                        value: { _constructor: "RelativeDate", value: "-1m" }
                    },
                    { fieldName: "orderDate", operator: "lessOrEqual", 
                        value: { _constructor: "RelativeDate", value: "$today" }
                    }
                ]
            },
        "Previous Week" :
            { _constructor: "AdvancedCriteria", operator: "and", 
                criteria: [
                    { fieldName: "orderDate", operator: "greaterThan", 
                        value: { _constructor: "RelativeDate", value: "-1w" }
                    },
                    { fieldName: "orderDate", operator: "lessOrEqual", 
                        value: { _constructor: "RelativeDate", value: "$today" }
                    }
                ]
            },
        "Yesterday" :
            { fieldName: "orderDate", operator: "equals",
                value: { _constructor: "RelativeDate", value: "$yesterday" }
            },
        "Today" :
            { fieldName: "independence", operator: "equals", 
                value: { _constructor: "RelativeDate", value: "$today" }
            }
    }
});

