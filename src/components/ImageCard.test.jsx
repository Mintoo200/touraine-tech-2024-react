import { render, screen } from "@testing-library/react";
import ImageCard from "./ImageCard";
import { describe, expect, it } from "vitest";

describe("<ImageCard />", () => {
    it("displays the image provided", () => {
        const entry = {
            src: "/my/image.webp",
            description: "An image with a cat in it probably",
            votes: 1,
        }

        render(<ImageCard entry={entry} />)

        const image = screen.getByRole('img', { name: "An image with a cat in it probably" });
        expect(image).toBeVisible()
    })
})
