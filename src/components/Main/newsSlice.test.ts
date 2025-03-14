import { describe } from "vitest";
import newsReducer, { addDate } from "./newsSlice";

describe("newsSlice reducer", () => {
    test("should return initial state", () => {
        const initialState = {visibleDates: []};
        expect(newsReducer(undefined, {type: "unknown"})).toEqual(initialState);
    });

    test("should add new date if it doesn't exist", () => {
        const prevState = {visibleDates: ["2019-01-01"]};
        const action = addDate("2019-01-02");
        const nextState = newsReducer(prevState, action);

        expect(nextState.visibleDates).toContain("2019-01-02");
        expect(nextState.visibleDates.length).toBe(2);
    });

    test("should not add new date if it already exists", () => {
        const prevState = {visibleDates: ["2019-01-01"]};
        const action = addDate("2019-01-01");
        const nextState = newsReducer(prevState, action);

        expect(nextState.visibleDates).toEqual(["2019-01-01"]);
    });
});