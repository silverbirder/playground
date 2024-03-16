import { test, expect } from "@playwright/experimental-ct-react";
import { InputMediaForTest } from "./input-media.story";

test("changes the image", async ({ mount }) => {
  let mediaSelected: string | null = null;

  const component = await mount(
    <InputMediaForTest
      onMediaChange={(mediaName) => {
        mediaSelected = mediaName;
        console.log({ mediaName });
      }}
    />
  );
//   await component
//     .getByTestId("imageInput")
//     .setInputFiles("src/assets/logo.png");

//   await expect(component.getByAltText(/selected image/i)).toBeVisible();
//   await expect.poll(() => mediaSelected).toBe("logo.png");
});
