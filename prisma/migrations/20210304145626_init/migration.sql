-- CreateTable
CREATE TABLE "_PlantToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PlantToTag_AB_unique" ON "_PlantToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_PlantToTag_B_index" ON "_PlantToTag"("B");

-- AddForeignKey
ALTER TABLE "_PlantToTag" ADD FOREIGN KEY ("A") REFERENCES "Plant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlantToTag" ADD FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
