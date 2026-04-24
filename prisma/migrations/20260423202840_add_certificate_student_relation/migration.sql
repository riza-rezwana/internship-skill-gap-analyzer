-- AlterTable
ALTER TABLE `certificate` ADD COLUMN `studentId` INTEGER NULL;

-- CreateIndex
CREATE INDEX `certificate_studentId_idx` ON `certificate`(`studentId`);

-- AddForeignKey
ALTER TABLE `certificate` ADD CONSTRAINT `certificate_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `student`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
