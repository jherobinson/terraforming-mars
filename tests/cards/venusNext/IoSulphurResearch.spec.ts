import { expect } from "chai";
import { IoSulphurResearch } from "../../../src/cards/venusNext/IoSulphurResearch";
import { Color } from "../../../src/Color";
import { Player } from "../../../src/Player";
import { Game } from "../../../src/Game";

describe("IoSulphurResearch", function () {
    it("Should play", function () {
        const card = new IoSulphurResearch();
        const player = new Player("test", Color.BLUE, false);
        const game = new Game("foobar", [player,player], player);
        expect(card.canPlay()).to.eq(true);
        const action = card.play(player,game);
        expect(action).to.eq(undefined);
        expect(player.cardsInHand.length).to.eq(1);
    });
});